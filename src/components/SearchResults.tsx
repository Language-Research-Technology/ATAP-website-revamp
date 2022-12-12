import {useContent} from 'contexts/ContentProvider';
import Link from 'next/link';
import React from 'react';
import Post, {Page} from 'types/post';

type SearchResultProps = {
  prompt: string;
  expanded: boolean;
  onSearch(): void;
};

type WithUrl = {
  url: string;
};

export default function SearchResults({
  prompt,
  expanded,
  onSearch,
}: SearchResultProps) {
  const {posts, pages} = useContent();

  if (prompt.length < 1 || !expanded) return <></>;

  const isPageRelevant = (page: Partial<Page>): boolean => {
    if ((page?.title ?? '').includes(prompt)) {
      return true;
    }
    if ((page?.slug ?? '').includes(prompt)) {
      return true;
    }
    if (page.tags) {
      for (const tag of page.tags) {
        if (tag.includes(prompt)) {
          return true;
        }
      }
    }
    return false;
  };

  const getPostUrl = (post: Partial<Post>): string =>
    `/posts/${post.slug ?? ''}`;
  const getPageUrl = (page: Partial<Page>): string => '/' + (page.slug ?? '');

  const pagesWithUrls = pages.map(page => ({
    ...page,
    url: getPageUrl(page),
  }));
  const postsWithUrls = posts.map(post => ({
    ...post,
    url: getPostUrl(post),
  }));

  const relevantPages = pagesWithUrls.filter(isPageRelevant);
  const relevantPosts = postsWithUrls.filter(isPageRelevant);

  return (
    <div className="absolute top-full w-full bg-white shadow-sm">
      {relevantPages.length === 0 && relevantPosts.length === 0 ? (
        <p> No results</p>
      ) : (
        <div>
          <ResultDisplay
            onClick={onSearch}
            title="Pages"
            posts={relevantPages}
          />
          <ResultDisplay
            onClick={onSearch}
            title="Blog Posts"
            posts={relevantPosts}
          />
        </div>
      )}
    </div>
  );
}

type ResultDisplayProps = {
  title: string;
  posts: (Partial<Page> & WithUrl)[];
  onClick(): void;
};

function ResultDisplay({title, posts, onClick}: ResultDisplayProps) {
  if (posts.length === 0) return <></>;

  return (
    <div>
      <p className="bg-gray-50 px-2 py-1 font-semibold">{title}</p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {posts.map(post => (
          <li>
            <Link href={post.url}>
              <a>
                <div
                  className="py-4 px-2 transition hover:bg-gray-200"
                  onClick={onClick}
                >
                  {post?.title ?? post?.slug}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
