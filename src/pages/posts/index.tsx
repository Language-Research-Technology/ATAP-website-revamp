import React from 'react';
import Post from 'types/post';
import PostSummary from 'components/PostSummary';
import {getAllPosts} from 'lib/postMarkdown';

type Props = {
  posts: Post[];
};

export default function Posts({posts}: Props) {
  return (
    <div>
      <h1 className="mb-2">Posts</h1>
      <div className="flex flex-col space-y-2">
        {posts
          .filter(post => !(post.draft ?? false))
          .map(post => (
            <PostSummary
              title={post.title}
              author={post.author}
              date={post.date}
              slug={post.slug}
            />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'draft']);

  return {
    props: {posts},
  };
}
