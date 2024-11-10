import React from 'react';
import styled from 'styled-components';
import { gray1, blue1 } from '../../contantes/color';
import { Project } from '../../type';
import { Link } from 'react-router-dom';

const ProjectCardDiv = styled.div`
    padding: 2rem;
    color: ${gray1};
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <ProjectCardDiv>
            <h2>{project.title}</h2>
            <Link to={`/project/${project.id}`}>Voir</Link>
            <TechIcons>
                {project.technologies.map((technology) => (
                    <TechIcon key={technology} className={`fab fa-${technology}`}></TechIcon>
                ))}
            </TechIcons>
        </ProjectCardDiv>
    );
};

export default ProjectCard;