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

const ProjectList = styled.div`
  display: flex;
  padding: 20px 0;
  & > div {
    width: 33%;
    @media screen and (${device.laptop}) {
      width: 50%;
    }
    @media screen and (${device.mobile}) {
      margin: 0 0 10px 0;
      width: 100%;
      margin-left: 0;
    }
  }
`;

const projectList = [
  {
    title: 'von-der-see.de',
    description: `The agency website created with a headless CMS (WordPress) as backend and Gatsby as frontend. 
    A lot of animations and shenanigans were used to show the creative side of the company and its employees.`,
    url: 'https://von-der-see.de',
  },
  {
    title: 'KEPTN.info',
    description: `Informative website about the smartcity app KEPTN. Used for initial guiding and providing informations, the KEPTN.info was once created using an HTML template, but soon ported using Gatsby and WordPress to allow dynamic content.`,
    url: 'https://keptn.info',
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
