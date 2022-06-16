import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const pageContentDirectory = join(process.cwd(), 'content', 'pages');

function getPagePaths() {
  return fs.readdirSync(pageContentDirectory);
}

export function getPageContent(slug: string): string {
  const fullPath = join(pageContentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {content} = matter(fileContents);
  return content;
}

export function getAllPageSlugs(slugsToIgnore: string[]) {
  const slugs = getPagePaths();
  const pages = slugs
    .map(slug => slug.replace(/\.md$/, ''))
    .filter(slug => !slugsToIgnore.includes(slug));

  return pages;
}
