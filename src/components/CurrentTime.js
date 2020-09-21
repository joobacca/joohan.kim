import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const StyledTime = styled.div`
  color: white;
  font-size: 100px;
  min-height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentTime = () => <StyledTime>{dayjs().format('HH:mm:ss')}</StyledTime>;

export default CurrentTime;
