const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const originalsDir = path.join(publicDir, 'originals');
const imagesToOptimize = [
  'DahabEgypt.jpg',
  'StCathrineBoulder.jpg',
  'TannourineApproachDay.jpg',
  'TannourineDay.jpg',
  'TannourineNight.jpg',
  'WadiDegla.jpg',
  'AscentComp.jpg',
  'Priceintel.jpg',
  'traffic-map.jpg',
  'timesync-preview.jpg',
];

// Ensure originals directory exists
if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
}

async function optimizeImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const originalPath = path.join(originalsDir, filename);
  const tempPath = path.join(publicDir, `${filename}.tmp`);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} not found, skipping...`);
    return;
  }

  try {
    // Save original to originals folder if not already there
    if (!fs.existsSync(originalPath)) {
      fs.copyFileSync(inputPath, originalPath);
      console.log(`\n💾 Saved original: ${filename}`);
    }
    
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`📸 Optimizing ${filename} (${originalSize} MB)...`);
    
    // Get image metadata
    const metadata = await sharp(inputPath, { failOnError: false }).metadata();
    const maxWidth = 1920;
    
    let sharpInstance = sharp(inputPath, { failOnError: false });
    
    // Resize if width exceeds maxWidth
    if (metadata.width > maxWidth) {
      sharpInstance = sharpInstance.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
      console.log(`   Resizing from ${metadata.width}x${metadata.height} to max ${maxWidth}px width`);
    }
    
    // Optimize with quality settings - write to temp file first
    // Handle both JPEG and other formats
    const format = metadata.format === 'jpeg' || metadata.format === 'jpg' ? 'jpeg' : 'jpeg';
    await sharpInstance
      .toFormat(format, {
        quality: 85,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(tempPath);
    
    // Replace original with optimized version
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    const newStats = fs.statSync(inputPath);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`   ✅ Optimized: ${originalSize} MB → ${newSize} MB (${reduction}% reduction)`);
    
  } catch (error) {
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    console.error(`   ❌ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  console.log('🚀 Starting image optimization...\n');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }
  
  console.log('\n✨ Image optimization complete!');
}

optimizeAll().catch(console.error);

