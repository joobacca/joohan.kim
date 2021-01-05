import React from 'react';
import Img from 'gatsby-image';
import SectionContainer from './section/Container';
import ScrollAnimation from './ScrollAnimation';
import Title from './section/Title';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import theme from '../theme';
import Button from './Button';
import useScrollToElement from '../hooks/useScrollToElement';
import useMyPrettyFace from '../hooks/useMyPrettyFace';
import useLogos from '../hooks/useLogos';

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

const Skills = styled.div`
  margin: 20px 0;
`;
const Logo = styled(Img)`
  margin: 0 10px 0 0;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const About = () => {
  const logos = useLogos();
  const face = useMyPrettyFace();
  const scrollTo = useScrollToElement();

  const { about, mylife } = theme.palette.section;
  return (
    <SectionContainer id="about">
      <Title color={about}>About myself</Title>
      <Container>
        <FlexChildren>
          <ScrollAnimation showOnce>
            <Image fluid={face.file.childImageSharp.fluid} />
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

          <div>My skills:</div>
          <Skills>
            {logos.allFile.nodes.map((image, i) => (
              <Logo
                key={image.name + i}
                fixed={image.childImageSharp.fixed}
                alt={`${image.name} logo`}
                title={`${image.name}`}
              />
            ))}
          </Skills>
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
