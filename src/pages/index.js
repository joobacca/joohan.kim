import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import About from '../components/About';
import MyLife from '../components/MyLife';
import Projects from '../components/Projects';
import ColorClock from '../components/ColorClock';
import EyeCatcher from '../components/StickyFindMe';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Joo Han Kim" />
      <Header />
      {/* <EyeCatcher /> */}
      <About />
      <MyLife />
      <Projects />
      <ColorClock />
    </Layout>
  );
};

export default IndexPage;
