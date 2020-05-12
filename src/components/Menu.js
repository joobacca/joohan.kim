import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useScrollToElement from '../hooks/useScrollToElement';

const MenuContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  right: 0;
  padding: 20px;
`;

const NavList = styled.ul`
  text-align: right;
  padding-left: 0;
  list-style: none;
  & > li {
    display: inline;
  }
`;

const Anchor = styled(animated.a)`
  padding: 10px 20px;

`;

const NavAnchor = ({ children, isVisible }) => {

  return (
    <Anchor style={spring}>
      {children}
    </Anchor>
  )
};

const ListItem = ({ target }) => {
  const [isVisible, setVisible] = React.useState();
  const element = document.querySelector(`#${target}`);
  const scrollHandler = () => {
    if(element.offsetTop < window.scrollY && element.offsetTop + element.offsetHeight > window.scrollY ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  });
  return (
    <NavAnchor onClick={() => scrollTo(target)} isVisible={isVisible}>
      {children}
    </NavAnchor>
  )
};


const Menu = () => {
  // const [scroll, setScroll] = React.useState();

  const scrollTo = useScrollToElement();

  return (
    <MenuContainer>
      <NavList>
        <ListItem target="about">
          About
        </ListItem>
        <li>
          <NavAnchor onClick={() => scrollTo('mylife')}>Curriculum</NavAnchor>
        </li>
        <li>
          <NavAnchor onClick={() => scrollTo('projects')}>Projects</NavAnchor>
        </li>
      </NavList>
    </MenuContainer>
  );
};

export default Menu;
