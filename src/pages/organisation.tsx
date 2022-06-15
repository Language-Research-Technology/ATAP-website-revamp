import MarkdownArticle from 'components/MarkdownContent';
import markdownToHtml from 'lib/markdownToHTML';
import {pageContent} from 'lib/pageMarkdown';
import React from 'react';

type Props = {
  content: string;
};

export default function Organisation({content}: Props) {
  return <MarkdownArticle content={content} />;
}

export async function getStaticProps() {
  const content = await markdownToHtml(pageContent('organisation'));

  return {
    props: {content},
  };
}
