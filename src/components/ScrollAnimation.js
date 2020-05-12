import React from 'react';
import { useSpring, animated as a } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const AnimationDiv = ({ visible, children, ...props }) => {
  const spring = useSpring({
    opacity: visible ? 1 : 0,
    config: { mass: 6, tension: 138, friction: 30 },
  });
  return (
    <a.div style={{ opacity: 0, ...spring }} {...props}>
      {children}
    </a.div>
  );
};

const Trigger = ({ children, showOnce, ...props }) => {
  const [show, setShow] = React.useState(false);
  return (
    <VisibilitySensor
      onChange={isVisible => setShow(isVisible)}
      partialVisibility
      active={!showOnce || !show}
    >
      <AnimationDiv visible={show} {...props}>
        {children}
      </AnimationDiv>
    </VisibilitySensor>
  );
};

export default Trigger;
