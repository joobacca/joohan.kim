import React from 'react';
import styled from 'styled-components';
import useSocialMedia from '../hooks/useSocialMedia';
import { Img } from 'gatsby-image';

const socialMedia = [
  {
    name: 'github',
    url: 'https://github.com/joobacca',
  },
  {
    name: `instagram`,
    url: `https://www.instagram.com/joobacca2/`,
  },
  {
    name: `youtube`,
    url: `https://www.youtube.com/user/D34DTH1NGY`,
  },
];

const StyledEC = styled.div`
  width: 300px;
  display: flex;
  & > * {
    width: 50%;
  }
`;

const renderSocialMedia = images => {
  const i = socialMedia.forEach((e, i) => {
    const image = images.find(img => e.name == img.name);
    return (
      <a key={image.name + i} href={e.url} target="_blank" rel="nofollower noreferrer">
        <Img
          fixed={image.childImageSharp.fixed}
          alt={`${image.name} logo`}
          title={`${image.name}`}
        />
      </a>
    );
  });
  console.log(i);
  return i
}
  

const EyeCatcher = () => {
  React.useEffect(() => {
    const scrollHandler = e => {};
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  });

  const { nodes: imageData } = useSocialMedia().allFile;
  return (
    <StyledEC>
      <span>Find me on:</span>
      {renderSocialMedia(imageData)}
    </StyledEC>
  );
};

export default EyeCatcher;
