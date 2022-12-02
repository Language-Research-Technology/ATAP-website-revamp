export interface Page {
  title: string;
  slug: string;
  content: string;
  tags?: string[];
}

export interface Post extends Page {
  order: number;
  author: string;
  date: string;
  draft?: boolean;
}

export default Post;
