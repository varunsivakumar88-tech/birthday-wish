import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(process.cwd(), ".output", "public");

if (!fs.existsSync(publicDir)) {
  console.error(".output/public directory not found. Please run vite build first.");
  process.exit(1);
}

const indexPath = path.join(publicDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in .output/public");
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexPath, "utf8");

fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent, "utf8");
fs.writeFileSync(path.join(publicDir, ".nojekyll"), "", "utf8");

console.log("GitHub Pages deployment bundle successfully prepared in .output/public");
