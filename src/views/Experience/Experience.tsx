import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gray1, blue1 } from '../../contantes/color';
import { Experience as ExperienceType } from '../../type';
import { getExperiences } from '../../utils/dbUtils';

const ExperienceContainer = styled.div`
  padding: 2rem;
  color: ${gray1};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${blue1};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
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
    z-index: 0;
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
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
    z-index: 1;
  }

  &:nth-child(even)::after {
    left: -8px;
    right: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &:nth-child(odd), &:nth-child(even) {
      left: 0;
      text-align: left;
    }

    &::after {
      left: 23px !important;
      right: auto !important;
    }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TechnologiesText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.85;
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
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);

    useEffect(() => {
        const loadContent = async () => {
            const experiencesData = await getExperiences();
            setExperiences(experiencesData);
        };
        loadContent();
    }, []);

    return (
        <ExperienceContainer>
            <Title>Experience</Title>
            <TimelineContainer>
                {experiences.map((experience) => (
                    <TimelineItem key={experience.id}>
                        <TimelineDate>{experience.startDate} - {experience.endDate}</TimelineDate>
                        <TimelineTitle>
                            {experience.title}
                        </TimelineTitle>
                        <TimelineDescription>
                            <CompanyLink href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                                {experience.company}
                            </CompanyLink>
                            <Description>
                                {experience.description}
                            </Description>
                            <TechnologiesText>
                                {experience.technologies}
                            </TechnologiesText>
                        </TimelineDescription>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </ExperienceContainer>
    );
};

export default Experience;