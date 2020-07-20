import React from 'react';
import styled from 'styled-components';

import { device } from '../../utils/breakpoints';

const Container = styled.section`
  box-sizing: border-box;
  padding: 50px 0;
  position: relative;
  min-height: 100vh;
  @media only screen and (${device.laptop}) {
    padding: 0;
    margin-bottom: 50px;
  }
`;

const InnerContainer = styled.div`
  padding: 10px;
  margin: 0 200px;
  @media only screen and (${device.laptop}) {
    margin: 0 100px;
  }
  @media only screen and (${device.tabletS}) {
    margin: 0;
  }
`;

const Section = ({ children, style, ...props }) => {
  return (
    <Container {...props}>
      <InnerContainer style={{ ...style }}>{children}</InnerContainer>
    </Container>
  );
};

export default Section;
