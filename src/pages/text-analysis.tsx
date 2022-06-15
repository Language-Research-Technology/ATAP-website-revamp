import MarkdownArticle from 'components/MarkdownContent';
import markdownToHtml from 'lib/markdownToHTML';
import {pageContent} from 'lib/pageMarkdown';
import React from 'react';

type Props = {
  content: string;
};

export default function TextAnalysisPage({content}: Props) {
  return <MarkdownArticle content={content} />;
}

export async function getStaticProps() {
  const content = await markdownToHtml(pageContent('text_analysis'));

  return {
    props: {content},
  };
}
