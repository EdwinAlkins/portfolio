import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gray1 } from '../../contantes/color';
import ProjectCard from './CardProject';
import { getProjects } from '../../utils/dbUtils';
import { Project as ProjectType } from '../../type';


const ProjectContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const PageSubtitle = styled.p`
  margin: 0;
  opacity: 0.7;
  font-size: 1rem;
`;

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        const loadContent = async () => {
            const projects = await getProjects()
            setProjects(projects)
        }
        loadContent()
    }, [])

    return (
        <ProjectContainer>
            <PageHeader>
                <PageTitle>Projects</PageTitle>
                <PageSubtitle>Browse my portfolio projects</PageSubtitle>
            </PageHeader>
            <ProjectGrid>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectGrid>
        </ProjectContainer>
    );
};

export default Projects; 