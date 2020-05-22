import React from 'react';
import styled from 'styled-components';
import { animated as a, useSpring } from 'react-spring';
import { device } from '../../utils/breakpoints';
import VisibilitySensor from 'react-visibility-sensor';

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 3rem;
  width: fit-content;
  @media only screen and (${device.tabletS}) {
    font-size: 2.2rem;
  }
`;

const TitleContainer = styled(a.div)`
  width: 500px;
  max-width: 100%;
  position: relative;
`;

const BottomBorder = styled(a.div)`
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-bottom: 3px solid ${({ color }) => color};
`;

const Title = ({ children, color, ...props }) => {
  const [visible, set] = React.useState(false);
  const spring = useSpring({
    width: visible ? '100%' : '0%',
  });
  return (
    <VisibilitySensor
      onChange={isVisible => set(isVisible)}
      active={!visible}
      partialVisibility
    >
      <TitleContainer {...props}>
        <SectionTitle>{children}</SectionTitle>
        <BottomBorder color={color} style={spring} />
      </TitleContainer>
    </VisibilitySensor>
  );
};

export default Title;
