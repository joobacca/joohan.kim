import React from 'react';
import SectionContainer from './section/Container';
import styled from 'styled-components';
import CurrentTime from './CurrentTime';

const convertToHexString = value =>
  value < 10 ? `0${value.toString()}` : `${value.toString()}`;

const getTimeInHex = time => {
  const str = `#${convertToHexString(time.getHours())}${convertToHexString(
    time.getMinutes(),
  )}${convertToHexString(time.getSeconds())}`;
  return str;
};

const StyledSectionContainer = styled(SectionContainer)`
  background-color: ${({ color }) => color};
`;

const ColorClock = () => {
  const [color, setColor] = React.useState('#fff');
  const callback = () => setColor(getTimeInHex(new Date()));
  React.useEffect(() => {
    setInterval(callback, 1000);
    return () => clearInterval(callback, 1000);
  }, []);

  return (
    <StyledSectionContainer id="clock" color={color} style={{ minHeight: 'inherit' }}>
      <CurrentTime />
    </StyledSectionContainer>
  );
};

export default ColorClock;
