import sharp from "sharp";
import fs from "fs";

const markSrc = "public/assets/naturavive/brand/naturavive-logo-mark.png";
const logoLight =
  "public/assets/naturavive/brand/naturavive-logo-horizontal-light.png";
const heroBg = "public/assets/naturavive/hero/hero-section-bg.webp";

async function makeSquareIcon(size, outPath, markRatio = 0.7) {
  const pad = Math.round(size * markRatio);
  const mark = await sharp(markSrc)
    .resize(pad, pad, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: mark, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log("icon", outPath, `${size}x${size}`, fs.statSync(outPath).size + "b");
}

async function makeOg() {
  const bg = await sharp(heroBg)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .toBuffer();

  const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#122A20" stop-opacity="0.88"/>
      <stop offset="50%" stop-color="#1B4332" stop-opacity="0.62"/>
      <stop offset="100%" stop-color="#1B4332" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="72" y="290" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#FFFFFF">Daily Wellness,</text>
  <text x="72" y="362" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#E8C96A">Powered by Nature.</text>
  <text x="72" y="430" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#F7F5F0">Science-backed supplements for energy, immunity and vitality.</text>
  <text x="72" y="560" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#B88916" letter-spacing="2">NATURAVIVE.COM</text>
</svg>`);

  const logo = await sharp(logoLight)
    .resize({
      width: 320,
      height: 70,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp(bg)
    .composite([
      { input: overlay, top: 0, left: 0 },
      { input: logo, top: 64, left: 72 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile("public/og-image.jpg");

  console.log("og", "public/og-image.jpg", fs.statSync("public/og-image.jpg").size + "b");
}

await makeSquareIcon(512, "src/app/icon.png", 0.72);
await makeSquareIcon(180, "src/app/apple-icon.png", 0.72);
await makeSquareIcon(180, "public/apple-icon.png", 0.72);
await makeSquareIcon(32, "public/favicon.png", 0.78);
await makeSquareIcon(256, "public/assets/naturavive/brand/favicon-256.png", 0.72);
await makeSquareIcon(192, "public/icon-192.png", 0.72);
await makeOg();

if (fs.existsSync("src/app/favicon.ico")) {
  fs.unlinkSync("src/app/favicon.ico");
  console.log("removed src/app/favicon.ico");
}
