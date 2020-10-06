import React from 'react';
import theme from '../theme';
import SectionContainer from './section/Container';
import Title from './section/Title';
import { useTrail, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Button from './Button';
import styled from 'styled-components';
import useScrollToElement from '../hooks/useScrollToElement';
import { device } from '../utils/breakpoints';

const Step = styled(animated.div)`
  display: flex;
  @media screen and (${device.tabletS}) {
    display: block;
  }
`;

const Year = styled.div`
  padding: 20px 10px;
  min-width: 100px;
  @media screen and (${device.tabletS}) {
    padding: 20px 10px 0 0 !important;
  }
`;
const StepDesc = styled.div`
  padding: 20px 10px;
  min-width: 100px;
  @media screen and (${device.tabletS}) {
    padding: 20px 10px 20px 0 !important;
  }
`;


const data = [
  {
    year: '2013 - 2014',
    happening:
      'Finished high school in Leer, Ostfriesland and decided to move to Emden to start studying',
  },
  {
    year: '2014 - 2017',
    happening: 'Computer Science (B.Sc.), 5 semesters',
  },
  {
    year: '2017 - 2020',
    happening: `Apprenticeship (Ausbildung) to a certified software developer`,
  },
  {
    year: '2020 -',
    happening:
      'Currently employed as a web developer at Digitalagentur VON DER SEE GmbH, Emden',
  },
];

const Life = styled.div`
  padding: 10px;
`;

const MyLife = () => {
  const { projects } = theme.palette.section;
  const scrollTo = useScrollToElement();
  const [isVisible, set] = React.useState(false);
  const trail = useTrail(data.length, {
    height: isVisible ? 'initial' : 0,
    from: { height: 0 },
  });
  return (
    <VisibilitySensor partialVisibility active={!isVisible} onChange={set}>
      <SectionContainer id="mylife">
        <Title color={theme.palette.section.mylife}>Curriculum vitae</Title>

        <Life>
          {trail.map(({ height }, index) => (
            <Step style={{ height }}>
              <Year style={{ padding: '20px 10px', minWidth: '100px' }}>{data[index].year}</Year>
              <StepDesc>{data[index].happening}</StepDesc>
            </Step>
          ))}
        </Life>

        <Button
          color={projects}
          borderColor={projects}
          onClick={() => scrollTo('projects')}
        >
          Projects
        </Button>
      </SectionContainer>
    </VisibilitySensor>
  );
};

export default MyLife;
