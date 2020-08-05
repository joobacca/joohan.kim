import React from 'react';
import { useSpring } from 'react-spring';
import { windowObject, documentObject } from '../utils/ssrObjects';

function useScrollToElement() {
  const [scrolling, setScrolling] = React.useState(false);
  const [, setY] = useSpring(() => ({
    y: 0,
  }));

  const onClickHandler = id => {
    let element = id;
    if (typeof id === 'string') {
      element = documentObject.querySelector(`#${id}`);
    }

    setScrolling(true);

    setY({
      y: element.offsetTop,
      reset: true,
      from: { y: windowObject.scrollY },
      onRest: () => setScrolling(false),
      onFrame: props => windowObject.scroll(0, props.y),
    });
  };

  const onWheelHandler = () => {
    if (scrolling) {
      setY({
        y: windowObject.scrollY,
        reset: true,
        from: { y: windowObject.scrollY },
        onFrame: props => windowObject.scroll(windowObject.scrollY, props.y),
      });
    }
  };

  React.useEffect(() => {
    documentObject.addEventListener('wheel', onWheelHandler);
    return () => documentObject.removeEventListener('wheel', onWheelHandler);
  }, []);

  return onClickHandler;
}

export default useScrollToElement;
