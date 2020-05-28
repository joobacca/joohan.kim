import React from 'react';
import { useSpring } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SectionContainer from './section/Container';
import ScrollAnimation from './ScrollAnimation';
import Title from './section/Title';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import theme from '../theme';
import Button from './Button';
import useScrollToElement from '../hooks/useScrollToElement';

const Container = styled.div`
  padding: 30px 0;
  @media screen and (${device.tabletS}) {
    display: block;
  }
  display: flex;
`;

const FlexChildren = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  @media screen and (${device.tabletS}) {
    width: 100%;
  }
`;

const Image = styled(Img)`
  width: 60%;
  @media screen and (${device.tabletS}) {
    width: 60%;
    margin: auto;
  }
`;

const AboutText = styled.p`
  color: #333;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/joo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const { about, mylife } = theme.palette.section;

  const scrollTo = useScrollToElement();
  return (
    <SectionContainer id="about">
      <Title color={about}>About myself</Title>
      <Container>
        <FlexChildren>
          <ScrollAnimation showOnce>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ScrollAnimation>
        </FlexChildren>
        <FlexChildren>
          <AboutText>
            I am a web developer based in Emden, Germany. I have been developing
            websites and applications since 2014 - when I started studying. I am
            looking forward to learning new technologies in front- and backend
            development.
          </AboutText>
          <AboutText>
            My main skills consist of WordPress theme development and building
            static websites using Gatsby - such as this one. You might notice
            that I'm not necessarily a design professional - you can still rely
            on my experience in implementing given design templates.
          </AboutText>
        </FlexChildren>
      </Container>
      <Button
        color={mylife}
        borderColor={mylife}
        onClick={() => scrollTo('mylife')}
      >
        Curriculum vitae
      </Button>
    </SectionContainer>
  );
};

export default About;
