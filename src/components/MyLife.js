import React from 'react';
import theme from '../theme';
import SectionContainer from './section/Container';
import Title from './section/Title';
import { useTrail, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import Button from './Button';
import styled from 'styled-components';
import useScrollToElement from '../hooks/useScrollToElement';

const YearContainer = styled(animated.div)`
  display: flex;
`;

const data = [
  {
    year: 2014,
    happening:
      'Finished high school in Leer, Ostfriesland and decided to move to Emden to start studying.',
  },
  {
    year: 2017,
    happening:
      'After 5 semesters and lots of self deterioration I realized that I should quit studying and take care of myself and my health. After a break of half a year, I went to a second take to an apprenticeship.',
  },
  {
    year: 2020,
    happening: `Soon I'll be done and be certificated to work as a software developer.`,
  },
];

const Life = styled.div`
  padding: 20px;
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
            <YearContainer style={{ height }}>
              <div style={{ padding: '20px' }}>{data[index].year}</div>
              <div style={{ padding: '20px' }}>{data[index].happening}</div>
            </YearContainer>
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
