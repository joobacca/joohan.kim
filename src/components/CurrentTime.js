import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const StyledTime = styled.div`
  color: white;
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CurrentHexCode = styled.span`
  color: white;
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentTime = ({ color }) => (
  <StyledTime>
    <p>{dayjs().format('HH:mm:ss')}</p>
    <CurrentHexCode>{color}</CurrentHexCode>
  </StyledTime>
);

export default CurrentTime;
