import React from 'react';
import styled from 'styled-components';
import { gray1, blue1 } from '../../contantes/color';

const ExperienceContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${blue1};
  margin-bottom: 2rem;
  text-align: center;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${blue1};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
    text-align: right;
  }
  
  &:nth-child(even) {
    left: 50%;
    text-align: left;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${blue1};
    border-radius: 50%;
    top: 15px;
    right: -8px;
  }
  
  &:nth-child(even)::after {
    left: -8px;
  }
`;

const TimelineDate = styled.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${blue1};
`;

const TimelineTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${blue1};
    }
  }
`;

const TimelineDescription = styled.div`
  margin: 0;
  line-height: 1.5;
`;

const CompanyLink = styled.a`
  color: ${blue1};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  margin: 0.5rem 0;
`;

const Experience: React.FC = () => {
    return (
        <ExperienceContainer>
            <Title>Experience</Title>
            <TimelineContainer>
                <TimelineItem>
                    <TimelineDate>2022 - Present</TimelineDate>
                    <TimelineTitle>
                        Full Stack Developer
                    </TimelineTitle>
                    <TimelineDescription>
                        <CompanyLink href="https://www.dice-engineering.com" target="_blank" rel="noopener noreferrer">
                            D-ICE Engineering
                        </CompanyLink>
                        <Description>
                            Development of web and desktop applications for maritime routing. Scrapping of weather data.
                            Technologies used are React, Node.js, Vue.js, PostgreSQL, Docker, Kubernetes, Python, React Native.
                        </Description>
                    </TimelineDescription>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDate>2021 - 2022</TimelineDate>
                    <TimelineTitle>
                        Software Architect
                    </TimelineTitle>
                    <TimelineDescription>
                        <CompanyLink href="https://www.asi.fr" target="_blank" rel="noopener noreferrer">
                            ASI
                        </CompanyLink>
                        <Description>
                            Architecture and development of web solutions for key accounts.
                            Technologies used include React, Node.js, PostgreSQL, Docker, Vue.js, Angular, Java, Azure.
                        </Description>
                    </TimelineDescription>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDate>Mai-Août 2018</TimelineDate>
                    <TimelineTitle>
                        Interim Software Developer
                    </TimelineTitle>
                    <TimelineDescription>
                        <CompanyLink href="https://www.lpg-group.com/fr/groupe-lpg" target="_blank" rel="noopener noreferrer">
                            LPG System
                        </CompanyLink>
                        <Description>
                            Internship and interim assignments in industrial supervision software development.
                            Technologies used are Java, MySQL, Android.
                        </Description>
                    </TimelineDescription>
                </TimelineItem>
            </TimelineContainer>
        </ExperienceContainer>
    );
};

export default Experience;