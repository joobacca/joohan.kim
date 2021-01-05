import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';
import About from '../components/About';
import MyLife from '../components/MyLife';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Joo Han Kim" />
      <Header />
      {/* <EyeCatcher /> */}
      <About />
      <MyLife />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
