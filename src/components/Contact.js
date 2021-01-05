import React from 'react';
import SectionContainer from './section/Container';
import styled from 'styled-components';
import { device } from '../utils/breakpoints';
import theme from '../theme';
import Title from './section/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const ContentContainer = styled.div`
  padding: 30px 0;
  width: 100%;
  height: 50vh;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  @media (${device.mobile}) {
    display: block;
  }
`;

const StyledFAI = styled(FontAwesomeIcon).attrs({ size: '2x' })`
  color: ${props => props.color || 'black'};
`;

const SocialLink = styled.a.attrs({
  target: 'blank',
  rel: 'nofollower noreferrer',
})`
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
  color: black;
  box-sizing: border-box;
  margin: 50px 0;
  @media (${device.mobile}) {
    margin: 20px 0;
  }
`;

const Contact = () => {
  const { contact } = theme.palette.section;

  return (
    <SectionContainer id="contact">
      <Title color={contact}>Contact</Title>
      <ContentContainer>
        <FlexContainer>
          <SocialLink href="https://github.com/joobacca">
            <StyledFAI icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.youtube.com/user/D34DTH1NGY">
            <StyledFAI color="red" icon={faYoutube} />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/joobacca2/">
            <StyledFAI icon={faInstagram} />
          </SocialLink>
          <SocialLink href="mailto:kontakt@joohan.kim">
            <StyledFAI icon={faEnvelope} color="#183153" />
          </SocialLink>
        </FlexContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Contact;
