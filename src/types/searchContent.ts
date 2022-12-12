import Post, {Page} from './post';

export type SearchContent = {
  posts: Partial<Post>[];
  pages: Partial<Page>[];
};

export default SearchContent;
