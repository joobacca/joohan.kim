import Head from 'next/head';
import profilePic from '../public/profilepic.jpeg';

const title = 'Joo Han Kim | Web developer based in Hamburg';
const description =
  'Personal website of Joo Han Kim, a Full Stack Developer from Hamburg, Germany.';

function CustomHead() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={profilePic.src} />
    </Head>
  );
}

export default CustomHead;
