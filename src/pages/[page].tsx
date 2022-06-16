import MarkdownArticle from 'components/MarkdownContent';
import markdownToHtml from 'lib/markdownToHTML';
import {getAllPageSlugs, getPageContent} from 'lib/pageMarkdown';
import {GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';

type Props = {
  content: string;
};

export default function ContentPage({content}: Props) {
  return <MarkdownArticle content={content} />;
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const content = await markdownToHtml(getPageContent(params?.page as string));
  return {props: {content}};
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getAllPageSlugs(['home']);

  return {
    paths: pages.map(page => ({params: {page}})),
    fallback: false,
  };
};
