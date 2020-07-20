/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme';
import Menu from './Menu';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
    font-family: 'Open Sans';
  }
`;

const StyledMain = styled.main`
  max-width: 1920px;
  margin: 0 auto;
`;

const Layout = ({ children, mode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledMain>
        <Menu />
        {children}
      </StyledMain>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
