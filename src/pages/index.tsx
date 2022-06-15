import MarkdownArticle from 'components/MarkdownContent';
import markdownToHtml from 'lib/markdownToHTML';
import {pageContent} from 'lib/pageMarkdown';

type Props = {
  content: string;
};

export default function Home({content}: Props) {
  return <MarkdownArticle content={content} />;
}

export async function getStaticProps() {
  const home = pageContent('home');
  const content = await markdownToHtml(home || '');

  return {
    props: {content},
  };
}
