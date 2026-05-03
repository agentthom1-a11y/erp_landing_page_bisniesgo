import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPath = path.join(__dirname, '../blog/sinar_erp_blog_seed_research.json');
const outDir = path.join(__dirname, '../src/content/blog');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const data = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

for (const post of data.posts) {
  const postPath = path.join(outDir, `${post.slug}.json`);
  fs.writeFileSync(postPath, JSON.stringify(post, null, 2));
  console.log(`Created ${postPath}`);
}

console.log('Migration complete!');
