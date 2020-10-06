import React from 'react';
import SectionContainer from './section/Container';
import styled from 'styled-components';
import CurrentTime from './CurrentTime';

const convertToHexString = value =>
  value < 16 ? `0${value.toString(16)}` : `${value.toString(16)}`;

const getTimeInHex = time => {
  const str = `#${convertToHexString(time.getHours())}${convertToHexString(
    time.getMinutes(),
  )}${convertToHexString(time.getSeconds())}`;
  return str;
};

const StyledSectionContainer = styled(SectionContainer)`
  min-height: 100vh;
`;

const ColorClock = () => {
  const [color, setColor] = React.useState('#fff');
  React.useEffect(() => {
    const callback = () => setColor(getTimeInHex(new Date()));
    setInterval(callback, 1000);
    return () => clearInterval(callback, 1000);
  }, [setColor]);

  return (
    <StyledSectionContainer
      id="clock"
      color={color}
      style={{ minHeight: 'inherit', backgroundColor: color }}
    >
      <CurrentTime color={color} />
    </StyledSectionContainer>
  );
};

export default ColorClock;
