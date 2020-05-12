import React from 'react';
import { useSpring } from 'react-spring';

function useScrollToElement() {
  const [scrolling, setScrolling] = React.useState(false);
  const [props, setY, stop] = useSpring(() => ({
    y: 0,
  }));

  const onClickHandler = id => {
    if (typeof window !== null) {
      var element = id;
      if(typeof id === 'string') {
        element = document.querySelector(`#${id}`);
      }

      setScrolling(true);

      setY({
        y: element.offsetTop,
        reset: true,
        from: { y: window.scrollY },
        onRest: () => setScrolling(false),
        onFrame: props => window.scroll(0, props.y),
      });
    }
  };

  const onWheelHandler = () => {
    if (scrolling && typeof window !== null) {
      setY({
        y: window.scrollY,
        reset: true,
        from: { y: window.scrollY },
        onFrame: props => window.scroll(window.scrollY, props.y),
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener('wheel', onWheelHandler);
    return () => document.removeEventListener('wheel', onWheelHandler);
  });

  return onClickHandler;
}

export default useScrollToElement;
