import MarkdownArticle from 'components/MarkdownContent';
import markdownToHtml from 'lib/markdownToHTML';
import {getAllPosts, getPostBySlug} from 'lib/postMarkdown';
import {GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';
import Post from 'types/post';

type Props = {
  post: Post;
  content: string;
};

export default function Page({post, content}: Props) {
  return (
    <div>
      <MarkdownArticle content={content} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = (params?.slug as string) ?? '';
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'order',
  ]);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      post,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
