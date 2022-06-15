import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const pageContentDirectory = join(process.cwd(), 'content', 'pages');

export function pageContent(slug: string): string {
  const fullPath = join(pageContentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {content} = matter(fileContents);
  return content;
}
