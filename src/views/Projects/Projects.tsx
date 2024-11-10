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

const Project: React.FC = () => {
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
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ProjectContainer>
    );
};

export default Project; 