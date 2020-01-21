const icnsConvert = require('@fiahfy/icns-convert');
const sharp = require('sharp');
const fs = require('fs-extra');

const generateIcons = async () => {
  const png1024 = await fs.readFile('src/assets/icon.png');

  const png16 = await sharp(png1024).resize(16, 16).toBuffer();
  const png32 = await sharp(png1024).resize(32, 32).toBuffer();
  const png48 = await sharp(png1024).resize(48, 48).toBuffer();
  const png64 = await sharp(png1024).resize(64, 64).toBuffer();
  const png128 = await sharp(png1024).resize(128, 128).toBuffer();
  const png256 = await sharp(png1024).resize(256, 256).toBuffer();
  const png512 = await sharp(png1024).resize(512, 512).toBuffer();

  const icns = await icnsConvert.convert([png1024, png512, png256, png128, png64, png48, png32, png16]);

  fs.outputFileSync('build/icon.png', png16);
  fs.outputFileSync('build/icon@2x.png', png32);
  fs.outputFileSync('build/icon.icns', icns);
};

generateIcons().catch(console.error);
