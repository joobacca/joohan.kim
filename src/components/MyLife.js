import React from 'react';
import theme from '../theme';
import SectionContainer from './section/Container';
import Title from './section/Title';

const MyLife = () => {
  return (
    <SectionContainer id="mylife">
      <Title color={theme.palette.section.mylife}>Curriculum vitae</Title>
      <div>asdfasdfasdf</div>
    </SectionContainer>
  );
};

export default MyLife;
