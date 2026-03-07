import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gray1, blue1 } from '../../contantes/color';
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

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? 'rgba(144, 205, 244, 0.15)' : 'transparent')};
  color: ${({ active }) => (active ? blue1 : gray1)};
  border: 1px solid ${({ active }) => (active ? blue1 : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 4px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${({ active }) => (active ? 1 : 0.7)};

  &:hover {
    opacity: 1;
    background: ${({ active }) => (active ? 'rgba(144, 205, 244, 0.2)' : 'rgba(255, 255, 255, 0.05)')};
  }
`;

type FilterType = 'all' | 'personal' | 'professional';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectType[]>([])
    const [filter, setFilter] = useState<FilterType>('all')

    useEffect(() => {
        const loadContent = async () => {
            const projects = await getProjects()
            setProjects(projects)
        }
        loadContent()
    }, [])

    const filteredProjects = projects.filter(project => {
        if (filter === 'all') return true;
        const isProfessional = !!project.experienceId;
        if (filter === 'professional') return isProfessional;
        if (filter === 'personal') return !isProfessional;
        return true;
    });

    return (
        <ProjectContainer>
            <PageHeader>
                <PageTitle>Projects</PageTitle>
                <PageSubtitle>Browse my portfolio projects</PageSubtitle>
                <FilterContainer>
                    <FilterButton
                        active={filter === 'all'}
                        onClick={() => setFilter('all')}
                    >
                        Tous
                    </FilterButton>
                    <FilterButton
                        active={filter === 'professional'}
                        onClick={() => setFilter('professional')}
                    >
                        Professionnels
                    </FilterButton>
                    <FilterButton
                        active={filter === 'personal'}
                        onClick={() => setFilter('personal')}
                    >
                        Personnels
                    </FilterButton>
                </FilterContainer>
            </PageHeader>
            <ProjectGrid>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectGrid>
        </ProjectContainer>
    );
};

export default Projects; 