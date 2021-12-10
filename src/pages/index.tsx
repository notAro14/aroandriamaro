/** @jsxImportSource theme-ui */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aro Andriamaro | Frontend developer</title>
        <meta name='description' content="Aro Andriamaro's personal website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p
        sx={{
          fontFamily: 'body',
        }}
      >
        Hello world
      </p>
    </>
  );
};

export default Home;
