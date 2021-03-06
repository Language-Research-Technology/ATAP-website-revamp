import Head from 'next/head';
import {ReactNode} from 'react';
import Footer from 'components/branding/Footer';
import Header from 'components/branding/Header';
import {ContentProvider} from 'contexts/ContentProvider';

interface layoutProps {
  children: ReactNode;
}

export default function MainLayout({children}: layoutProps) {
  return (
    <ContentProvider>
      <div>
        <Head>
          <title>ATAP</title>
        </Head>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container flex-1 py-8">{children}</main>
          <Footer />
        </div>
      </div>
    </ContentProvider>
  );
}
