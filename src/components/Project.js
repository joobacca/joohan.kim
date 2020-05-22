import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  box-shadow: 10px 10px 10px #0e0e0e;
`;

const Project = ({ data, ...props }) => {
  const { title, description, url } = data;
  return <Wrapper {...props}>{title}</Wrapper>;
};

export default Project;
