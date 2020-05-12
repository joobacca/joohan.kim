import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import About from '../components/About';
import MyLife from '../components/MyLife';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <About />
      <MyLife />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
