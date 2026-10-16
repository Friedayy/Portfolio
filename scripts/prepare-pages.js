import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html not found! Run vite build first.');
  process.exit(1);
}

// 1. Generate dist/404.html (SPA fallback for GitHub Pages)
fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
console.log('✓ Created dist/404.html');

// 2. Generate dist/ongoing/index.html (Direct 200 OK serving for /ongoing and /ongoing/)
const ongoingDir = path.join(distDir, 'ongoing');
if (!fs.existsSync(ongoingDir)) {
  fs.mkdirSync(ongoingDir, { recursive: true });
}
fs.copyFileSync(indexPath, path.join(ongoingDir, 'index.html'));
console.log('✓ Created dist/ongoing/index.html');

// 3. Ensure .nojekyll in dist and public (tells GitHub Pages not to process with Jekyll)
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
console.log('✓ Created .nojekyll');

// 4. Ensure CNAME exists in dist
const cnameSource = path.join(publicDir, 'CNAME');
const cnameTarget = path.join(distDir, 'CNAME');
if (fs.existsSync(cnameSource)) {
  fs.copyFileSync(cnameSource, cnameTarget);
  console.log('✓ Ensured dist/CNAME');
} else {
  fs.writeFileSync(cnameTarget, 'amaandev.me\n');
  console.log('✓ Created dist/CNAME');
}

console.log('🎉 GitHub Pages static assets successfully prepared!');
