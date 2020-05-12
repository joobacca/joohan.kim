import React, { useRef } from 'react';
import { useSpring, useChain, animated } from 'react-spring';
import styled from 'styled-components';

import SectionContainer from './section/Container';
import useScrollToElement from '../hooks/useScrollToElement';
import { device } from '../utils/breakpoints';
import Button from './Button';
import theme from '../theme';

const PageTitle = styled(animated.h1)`
  margin: 0;
  font-size: 6rem;
  width: fit-content;
  border-bottom: 2px solid black;
  @media only screen and (${device.tabletS}) {
    font-size: 3.2rem;
  }
`;

const SubTitle = styled(animated.p)`
  font-size: 3rem;
  color: #444242;
  margin: 0;
  @media only screen and (${device.tabletS}) {
    font-size: 2.4rem;
  }
`;

const Description = styled(animated.p)`
  color: #333;
  font-size: 1.9rem;
  margin: 0;
  margin: 10px 0;
  @media only screen and (${device.tabletS}) {
    font-size: 1.4rem;
  }
`;

const Header = () => {
  // const [mode, set] = useDarkMode();
  const titleRef = useRef();
  const title = useSpring({ from: { opacity: 0 }, opacity: 1, ref: titleRef });

  const subtitleRef = useRef();
  const subtitle = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    ref: subtitleRef,
  });

  const descRef = useRef();
  const desc = useSpring({ from: { opacity: 0 }, opacity: 1, ref: descRef });

  const buttonRef = useRef();
  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    opacity: 1,
    transform: 'translateX(0px)',
    ref: buttonRef,
  });

  const scrollTo = useScrollToElement();

  useChain([subtitleRef, titleRef, descRef, buttonRef], [0, 0.15, 0.3, 0.9]);

  return (
    <SectionContainer
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <SubTitle style={subtitle}>Hi, my name is</SubTitle>
      <PageTitle style={title}>Joo Han Kim</PageTitle>
      <Description style={desc}>
        A web developer based in Emden, Germany.
      </Description>
      <Button
        style={buttonSpring}
        borderColor={theme.palette.section.about}
        color={theme.palette.section.about}
        onClick={() => {
          scrollTo('about');
        }}
      >
        About
      </Button>
    </SectionContainer>
  );
};

export default Header;
