import React from 'react';
import styled from 'styled-components';
import { gray1, blue1 } from '../../contantes/color';

const AboutContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
  margin-top: 5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${blue1};
  margin-bottom: 1rem;
  text-align: center;
`;


const Presentation = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;


const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  flex-direction: column;
  max-width: 30%;
  color: ${gray1};
  span {
    color: ${blue1};
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5%;
  margin-top: 2rem;
`;

const CompanyLink = styled.a`
  color: ${blue1};
  text-decoration: none;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

const TechIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const TechIcon = styled.a`
  color: ${gray1};
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${blue1};
  }
`;

const About: React.FC = () => {
  const technologies = ["react", "node", "python", "docker", "aws", "git", "linux", "js", "java"]
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Presentation>
        <Description>
          Hello, my name is <span>William</span> and I'm currently working at{' '}
          <CompanyLink href="https://dice-engineering.com/" target="_blank" rel="noopener noreferrer">
            D-ICE Engineering
          </CompanyLink>{' '}
          as a <span>Software Engineer</span>.
          <br />
          <br />
          I graduated from the{' '}
          <CompanyLink href="https://polytech.univ-nantes.fr/" target="_blank" rel="noopener noreferrer">
            Polytech Nantes
          </CompanyLink>{' '}
          in computer science. I'm a full stack developer (frontend, backend, architecture and datascience).
          <br />
          <br />
          <TechIcons>
            {technologies.map((technology) => (
              <TechIcon key={technology} className={`fab fa-${technology}`}></TechIcon>
            ))}
          </TechIcons>
        </Description>
        <Image src={"/IMG_20240516_220132_026.jpg"} alt="William" />
      </Presentation>
    </AboutContainer>
  );
};

export default About; 