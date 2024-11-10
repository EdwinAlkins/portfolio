import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gray1 } from '../../contantes/color';
import { getProjects } from '../../utils/dbUtils';
import { Project as ProjectType } from '../../type';
import { Link, useParams } from 'react-router-dom';


const ProjectContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const Project: React.FC = () => {
    const { id } = useParams();
    const [project, setProject] = useState<ProjectType|null>(null)

    useEffect(() => {
        const loadContent = async () => {
            const projects = await getProjects()
            setProject(projects.find((project) => String(project.id) === id) || null)
        }
        loadContent()
    }, [id])

    return (
        <ProjectContainer>
            <Link to="/projects">Retour</Link>
           {project && <h1>{project.title}</h1>}
        </ProjectContainer>
    );
};

export default Project; 