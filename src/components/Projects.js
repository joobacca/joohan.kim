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
import Project from './Project';
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

const ProjectList = styled.div`
  display: flex;
  & > div {
    margin-left: 20px;
    @media screen and (${device.mobile}) {
      width: 100%;
      margin-left: 0;
    }
    @media screen and (${device.laptop}) {
      width: 50%;
    }
    width: 33%;

  }
`;

const projectList = [
  {
    title: 'von-der-see.de',
    description: '',
    url: 'https://von-der-see.de',
  },
  {
    title: 'KEPTN.info',
    description: '',
    url: 'https://von-der-see.de',
  },
];

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

  const { projects } = theme.palette.section;

  return (
    <SectionContainer id="projects">
      <Title color={projects}>Projects</Title>
      <ProjectList>
        {projectList.map(el => {
          return <Project data={el} key={el.title} />;
        })}
      </ProjectList>
    </SectionContainer>
  );
};

export default About;
