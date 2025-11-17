const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'icon.svg');

async function generateIcons() {
  console.log('🎨 Generating favicon icons...\n');

  // Read existing SVG or use default
  let svgContent;
  if (fs.existsSync(svgPath)) {
    svgContent = fs.readFileSync(svgPath, 'utf-8');
    console.log('✅ Using existing icon.svg');
  } else {
    // Default fallback SVG
    svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#000000"/>
  <text x="16" y="22" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="white" text-anchor="middle" letter-spacing="-0.5">S</text>
  <rect x="20" y="7" width="3" height="3" fill="#3B82F6" rx="0.3"/>
</svg>`;
    fs.writeFileSync(svgPath, svgContent);
    console.log('✅ Created icon.svg');
  }

  // Generate PNG versions for light and dark modes
  const sizes = [
    { name: 'icon-light-32x32.png', size: 32, bg: '#FFFFFF' },
    { name: 'icon-dark-32x32.png', size: 32, bg: '#000000' },
    { name: 'apple-icon.png', size: 180, bg: '#000000' },
  ];

  for (const { name, size, bg } of sizes) {
    try {
      // For light mode, we'll use a white background with black text
      // For dark mode, use black background with white text
      const isLight = bg === '#FFFFFF';
      const lightSvg = isLight 
        ? svgContent.replace('fill="#000000"', 'fill="#FFFFFF"').replace('fill="white"', 'fill="black"')
        : svgContent;

      await sharp(Buffer.from(isLight ? lightSvg : svgContent))
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, name));

      console.log(`✅ Created ${name}`);
    } catch (error) {
      console.error(`❌ Error creating ${name}:`, error.message);
    }
  }

  console.log('\n✨ Icon generation complete!');
}

generateIcons().catch(console.error);

