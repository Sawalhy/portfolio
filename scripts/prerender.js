import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
};

async function prerender() {
  console.log('🚀 Starting prerender process...');
  
  let server = null;
  let browser = null;
  
  try {
    // Start a simple static file server
    console.log('🖥️  Starting static server...');
    server = createServer(async (req, res) => {
      try {
        let filePath = req.url === '/portfolio/' || req.url === '/portfolio' 
          ? join(distPath, 'index.html')
          : join(distPath, req.url.replace('/portfolio/', ''));
        
        const ext = extname(filePath);
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        
        const content = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch (err) {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    
    await new Promise((resolve) => server.listen(4173, resolve));
    console.log('✅ Server listening on http://localhost:4173');
    
    // Launch browser
    console.log('📦 Launching Chromium...');
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navigate to the server
    console.log('🌐 Loading page...');
    const url = 'http://localhost:4173/portfolio/';
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Wait for React to hydrate and render everything
    console.log('⏳ Waiting for React hydration...');
    await page.waitForTimeout(2000); // Give time for all async operations
    
    // Wait for main content to be visible
    await page.waitForSelector('#root', { state: 'visible', timeout: 10000 });
    
    // Optional: Wait for specific content indicators
    try {
      await page.waitForSelector('nav', { timeout: 5000 });
      await page.waitForSelector('main', { timeout: 5000 });
    } catch (e) {
      console.warn('⚠️  Some content selectors not found, continuing anyway...');
    }
    
    // Get the fully rendered HTML
    console.log('📝 Extracting rendered HTML...');
    const html = await page.content();
    
    // Close browser and server
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
    console.log('✅ Browser and server closed');
    
    // Read the original HTML to preserve the structure
    const originalHtml = readFileSync(indexPath, 'utf-8');
    
    // Extract the rendered body content from Playwright
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const renderedBody = bodyMatch ? bodyMatch[1] : null;
    
    if (!renderedBody) {
      throw new Error('Could not extract rendered body content');
    }
    
    // Replace the body content in the original HTML
    const prerenderedHtml = originalHtml.replace(
      /<body[^>]*>[\s\S]*<\/body>/i,
      `<body>${renderedBody}</body>`
    );
    
    // Write the prerendered HTML back to index.html
    writeFileSync(indexPath, prerenderedHtml, 'utf-8');
    console.log('✨ Prerendering complete! HTML has been updated.');
    
    // Log file size for reference
    const size = (Buffer.byteLength(prerenderedHtml, 'utf-8') / 1024).toFixed(2);
    console.log(`📊 Prerendered HTML size: ${size} KB`);
    
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    if (browser) await browser.close().catch(() => {});
    if (server) await new Promise((resolve) => server.close(resolve)).catch(() => {});
    process.exit(1);
  }
}

prerender();

