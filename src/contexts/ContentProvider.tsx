import React, {useContext, createContext, useState} from 'react';
import Post, {Page} from 'types/post';

type ContentContextType = {
  posts: Partial<Post>[];
  setPosts(posts: Partial<Post>[]): void;
  pages: Partial<Page>[];
  setPages(pages: Partial<Page>[]): void;
};

type Props = {
  children: React.ReactNode;
};

const ContentContext = createContext<ContentContextType | null>(null);

export function ContentProvider({children}: Props) {
  const [posts, setPosts] = useState<Partial<Post>[]>([]);
  const [pages, setPages] = useState<Partial<Page>[]>([]);

  return (
    <ContentContext.Provider
      value={{
        posts,
        setPosts,
        pages,
        setPages,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);

  if (!context)
    throw new Error('useContent must be used inside a `ContentProvider`');

  return context;
}
