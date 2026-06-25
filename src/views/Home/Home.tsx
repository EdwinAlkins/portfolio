import React from 'react';
import styled from 'styled-components';
import { blue1, gray1 } from '../../contantes/color';
import { Link } from 'react-router-dom';
import { usePostHog } from '@posthog/react';

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
  margin-bottom: 0.5rem;
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

const LookAroundSection = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const LookAroundTitle = styled.h3`
  font-size: 1.2rem;
  color: ${gray1};
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const NavButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: 2px solid ${blue1};
  border-radius: 20px;
  color: ${gray1};
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${blue1};
    color: white;
  }
`;

const Home: React.FC = () => {
    const posthog = usePostHog();

    return (
        <HomeContainer>
            <Title>Hi, I'm Nauroy William !</Title>
            <Subtitle>
                I'm a <span>Full Stack & DevOps Engineer</span>.
            </Subtitle>
            <LookAroundSection>
                <LookAroundTitle>Take a look around :</LookAroundTitle>
                <ButtonGroup>
                    <NavButton to="/portfolio/about" onClick={() => posthog?.capture('home_nav_button_clicked', { label: 'About' })}>
                        <i className="fas fa-user"></i> About
                    </NavButton>
                    <NavButton to="/portfolio/experience" onClick={() => posthog?.capture('home_nav_button_clicked', { label: 'Experience' })}>
                        <i className="fas fa-briefcase"></i> Exp
                    </NavButton>
                    <NavButton to="/portfolio/projects" onClick={() => posthog?.capture('home_nav_button_clicked', { label: 'Projects' })}>
                        <i className="fas fa-folder"></i> Projects
                    </NavButton>
                    <NavButton to="/portfolio/articles" onClick={() => posthog?.capture('home_nav_button_clicked', { label: 'Articles' })}>
                        <i className="fas fa-newspaper"></i> Articles
                    </NavButton>
                </ButtonGroup>
            </LookAroundSection>
            <SocialLinks>
                <SocialLink href="https://github.com/EdwinAlkins" target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture('home_social_link_clicked', { platform: 'github' })}>
                    <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/william-nauroy" target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture('home_social_link_clicked', { platform: 'linkedin' })}>
                    <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink href="/portfolio/pdf/cv-william-nauroy-v2.pdf" target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture('home_social_link_clicked', { platform: 'resume' })}>
                    <i className="far fa-file-alt"></i>
                </SocialLink>
                <SocialLink href="https://dev.to/edwinalkins" target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture('home_social_link_clicked', { platform: 'devto' })}>
                    <i className="fab fa-dev"></i>
                </SocialLink>
            </SocialLinks>
        </HomeContainer>
    );
};

export default Home; 