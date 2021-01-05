import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 5%;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 0.8rem;
`;

const Footer = () => {
  return <Container>Built with <a href="https://www.gatsbyjs.com/" target="__blank">Gatsby.js</a></Container>;
};

export default Footer;
