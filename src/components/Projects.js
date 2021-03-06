import React from 'react';
import SectionContainer from './section/Container';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import theme from '../theme';
import Project from './Project';
import Title from './section/Title';

const ProjectList = styled.div`
  display: grid;
  padding: 20px 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media screen and (${device.laptop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (${device.mobile}) {
    grid-template-columns: 1fr;
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
