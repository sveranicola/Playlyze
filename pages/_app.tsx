import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='P icon' href='https://i.imgur.com/E1jfDYI.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
