import {getAllPages} from './pageMarkdown';
import {getAllPosts} from './postMarkdown';
import SearchContent from 'types/searchContent';
import {Page} from 'types/post';

export function getSearchContent(): SearchContent {
  const fields: (keyof Page)[] = ['title', 'slug', 'tags', 'content'];
  const posts = getAllPosts(fields);
  const pages = getAllPages(fields);

  return {posts, pages};
}
