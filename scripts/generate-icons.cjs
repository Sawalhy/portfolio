const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const svgPath = path.join(publicDir, 'icon.svg');

// The brand mark is a single terracotta blob, so light and dark share one rendering.
const sizes = [
  { name: 'icon-light-32x32.png', size: 32 },
  { name: 'icon-dark-32x32.png', size: 32 },
  { name: 'apple-icon.png', size: 180 },
];

const SVG_SIZE = 64; // intrinsic size of icon.svg

async function generateIcons() {
  console.log('🎨 Generating favicon icons from icon.svg...\n');

  if (!fs.existsSync(svgPath)) {
    console.error(`❌ ${svgPath} not found`);
    process.exit(1);
  }
  const svg = fs.readFileSync(svgPath);

  for (const { name, size } of sizes) {
    try {
      // Rasterize at the target size rather than upscaling the 64px default,
      // otherwise the 180px apple icon comes out soft.
      await sharp(svg, { density: Math.round((72 * size) / SVG_SIZE) })
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, name));
      console.log(`✅ Created ${name} (${size}×${size})`);
    } catch (error) {
      console.error(`❌ Error creating ${name}:`, error.message);
      process.exitCode = 1;
    }
  }

  console.log('\n✨ Icon generation complete!');
}

generateIcons().catch((error) => {
  console.error(error);
  process.exit(1);
});
