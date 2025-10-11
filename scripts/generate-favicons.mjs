import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import toIco from 'to-ico';

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function main() {
  const root = process.cwd();
  const publicDir = path.resolve(root, 'public');
  const imagesDir = path.resolve(publicDir, 'images');
  const srcLogo = path.resolve(imagesDir, 'logo-ags.jpg');

  if (!(await fileExists(srcLogo))) {
    throw new Error(`Logo source not found: ${srcLogo}`);
  }

  await ensureDir(publicDir);

  const targets = [
    { size: 16, out: path.resolve(publicDir, 'favicon-16x16.png') },
    { size: 32, out: path.resolve(publicDir, 'favicon-32x32.png') },
    { size: 180, out: path.resolve(publicDir, 'apple-touch-icon.png') },
    { size: 192, out: path.resolve(publicDir, 'icon-192x192.png') },
    { size: 512, out: path.resolve(publicDir, 'icon-512x512.png') },
  ];

  // Generate PNGs
  await Promise.all(
    targets.map(({ size, out }) =>
      sharp(srcLogo)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(out)
    )
  );

  // Generate favicon.ico from 16 and 32 pngs
  const icoPath = path.resolve(publicDir, 'favicon.ico');
  const png16 = await fs.readFile(path.resolve(publicDir, 'favicon-16x16.png'));
  const png32 = await fs.readFile(path.resolve(publicDir, 'favicon-32x32.png'));
  const icoBuffer = await toIco([png16, png32]);
  await fs.writeFile(icoPath, icoBuffer);

  // Create site.webmanifest
  let appName = 'App';
  try {
    const pkg = JSON.parse(await fs.readFile(path.resolve(root, 'package.json'), 'utf8'));
    if (pkg && pkg.name) appName = pkg.name;
  } catch {}

  try {
    const appJsonPath = path.resolve(root, 'app.json');
    if (await fileExists(appJsonPath)) {
      const app = JSON.parse(await fs.readFile(appJsonPath, 'utf8'));
      if (app && (app.displayName || app.name)) appName = app.displayName || app.name;
    }
  } catch {}

  const manifest = {
    name: appName,
    short_name: appName.length > 12 ? appName.slice(0, 12) : appName,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563EB',
    icons: [
      { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  };

  await fs.writeFile(path.resolve(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('Favicons and manifest generated successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
