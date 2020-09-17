import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useHover } from 'react-use-gesture';

const ProjectTitle = styled.a`
  font-size: 1.3rem;
  color: black;
  text-decoration: none;
`;

const Wrapper = styled(animated.div)`
  box-sizing: border-box;
  padding: 15px;
`;

const Project = ({ data, ...props }) => {
  const [hover, setHover] = React.useState(false);
  const spring = useSpring({
    boxShadow: hover
      ? '10px 10px 10px rgba(14, 14, 14, 0.6)'
      : '5px 5px 10px rgba(14, 14, 14, 0.2)',
  });
  const bind = useHover(({ hovering }) => setHover(hovering));
  const { title, description, url } = data;
  return (
    <Wrapper hovered={hover} {...bind()} {...props} style={spring}>
      <ProjectTitle href={url} rel="noopener noreferrer" target="_blank">
        {title}
      </ProjectTitle>
      <hr />
      <p>{description}</p>
      <div style={{ textAlign: 'right' }}>
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          Visit -&gt;
        </a>
      </div>
    </Wrapper>
  );
};

export default Project;
