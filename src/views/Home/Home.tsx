import React from 'react';
import styled from 'styled-components';
import { blue1, gray1 } from '../../contantes/color';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); // Adjust based on your header height
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${gray1};
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${gray1}; 
  
  span {
    color: ${blue1};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${gray1};
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${blue1};
  }
`;

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Title>Hi, I'm Nauroy William !</Title>
            <Subtitle>
                I'm a <span>full stack developer</span>.
            </Subtitle>
            <SocialLinks>
                <SocialLink href="https://github.com/EdwinAlkins" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/william-nauroy1998" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink href="/pdf/resumewn.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="far fa-file-alt"></i>
                </SocialLink>
            </SocialLinks>
        </HomeContainer>
    );
};

export default Home; 