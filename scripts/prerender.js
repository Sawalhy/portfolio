import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');

const BASE = '/portfolio/';
const PORT = 4173;

/** Built HTML files to prerender — keep in step with `pages` in vite.config.ts. */
const pages = [
  'index.html',
  'writing/javascript-doesnt-have-classes/index.html',
  'writing/prototype-chain/index.html',
];

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

/** Resolves a request URL to a file in dist, falling back to a directory index. */
async function resolveFile(url) {
  const relative = decodeURIComponent(url.split('?')[0]).replace(BASE, '').replace(/^\//, '');
  let filePath = join(distPath, relative);

  if (!extname(filePath)) {
    try {
      if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html');
    } catch {
      filePath = join(distPath, 'index.html');
    }
  }
  return filePath;
}

async function prerender() {
  console.log('🚀 Starting prerender process...');

  let server = null;
  let browser = null;

  try {
    console.log('🖥️  Starting static server...');
    server = createServer(async (req, res) => {
      try {
        const filePath = await resolveFile(req.url);
        const contentType = mimeTypes[extname(filePath)] || 'application/octet-stream';
        const content = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    await new Promise((resolve) => server.listen(PORT, resolve));
    console.log(`✅ Server listening on http://localhost:${PORT}`);

    console.log('📦 Launching Chromium...');
    browser = await chromium.launch({ headless: true });

    for (const page of pages) {
      const route = page === 'index.html' ? BASE : `${BASE}${page.replace(/index\.html$/, '')}`;
      const url = `http://localhost:${PORT}${route}`;
      console.log(`🌐 Rendering ${route}`);

      const tab = await browser.newPage();
      await tab.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await tab.waitForSelector('#root > *', { state: 'attached', timeout: 10000 });
      await tab.waitForTimeout(500); // let fonts settle and the reveal pass run

      const html = await tab.content();
      await tab.close();

      const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      if (!bodyMatch) throw new Error(`Could not extract rendered body for ${page}`);

      // Below-fold sections are captured mid-reveal (opacity 0). Reset them so the
      // static HTML reads in full without JavaScript; React re-tags them on mount.
      const body = bodyMatch[1].replace(/data-reveal="(pending|in)"/g, 'data-reveal=""');

      // Keep the built <head> (hashed asset links, per-page meta) and swap in the body.
      const target = join(distPath, page);
      const built = readFileSync(target, 'utf-8');
      const prerendered = built.replace(/<body[^>]*>[\s\S]*<\/body>/i, `<body>${body}</body>`);
      writeFileSync(target, prerendered, 'utf-8');

      const size = (Buffer.byteLength(prerendered, 'utf-8') / 1024).toFixed(2);
      console.log(`   ✨ ${page} — ${size} KB`);
    }

    await browser.close();
    await new Promise((resolve) => server.close(resolve));
    console.log('✅ Prerendering complete!');
  } catch (error) {
    console.error('❌ Prerender failed:', error);
    if (browser) await browser.close().catch(() => {});
    if (server) await new Promise((resolve) => server.close(resolve)).catch(() => {});
    process.exit(1);
  }
}

prerender();
