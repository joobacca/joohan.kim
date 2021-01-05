import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { useHover } from 'react-use-gesture';
import useScrollToElement from '../hooks/useScrollToElement';
import { windowObject, documentObject } from '../utils/ssrObjects';
import theme from '../theme';
import { device } from '../utils/breakpoints';

const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 0;
  right: 0;
  @media (${device.mobile}) {
    display: none;
  }
`;

const NavList = styled.ul`
  text-align: right;
  padding-left: 0;
  list-style: none;
  padding: 0 20px;
  background-color: #fffa;
  & > li {
    padding: 20px 10px;
    display: inline-block;
  }
`;

const Anchor = styled.a`
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
`;

const BottomBorder = styled(animated.div)`
  position: absolute;
  height: 2px;
  left: 0;
  border-bottom: 2px solid ${({ section }) => theme.palette.section[section]};
`;

const NavAnchor = ({ children, target, isVisible, ...props }) => {
  const transitions = useTransition(isVisible, null, {
    from: { width: '0%' },
    enter: { width: '100%' },
    leave: { width: '0%' },
  });

  const scrollTo = useScrollToElement();

  return (
    <li>
      <Anchor onClick={() => scrollTo(target)} {...props}>
        {children}
        {transitions.map(
          ({ item, props }) =>
            item && <BottomBorder section={target} style={props} />,
        )}
      </Anchor>
    </li>
  );
};

const ListItem = ({ target, children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const [isHovering, setHover] = React.useState(false);
  const bind = useHover(({ hovering }) => setHover(hovering));
  React.useEffect(() => {
    const element = documentObject.querySelector(`#${target}`);
    const scrollHandler = () => {
      if (
        element.offsetTop <= windowObject.scrollY + 50 &&
        element.offsetTop + element.offsetHeight - 50 > windowObject.scrollY
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    documentObject.addEventListener('scroll', scrollHandler);
    return () => documentObject.removeEventListener('scroll', scrollHandler);
  });
  return (
    <NavAnchor target={target} isVisible={isVisible || isHovering} {...bind()}>
      {children}
    </NavAnchor>
  );
};

const Menu = () => (
  <MenuContainer>
    <NavList>
      <ListItem target="about">About</ListItem>
      <ListItem target="mylife">Curriculum</ListItem>
      <ListItem target="projects">Projects</ListItem>
      <ListItem target="contact">Contact</ListItem>
    </NavList>
  </MenuContainer>
);

export default Menu;
