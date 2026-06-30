import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { gray1, blue1, black2 } from '../../contantes/color';
import { getProjects, getExperienceById } from '../../utils/dbUtils';
import { Project as ProjectType, Experience } from '../../type';
import { Link, useParams } from 'react-router-dom';
import { usePostHog } from '@posthog/react';
import NotFound from '../NotFound/NotFound';


// Known link types get a dedicated icon and label. Any other key is rendered
// generically (label derived from the key, no icon).
const LINK_META: Record<string, { icon?: string; label: string }> = {
    github: { icon: 'fab fa-github', label: 'GitHub' },
    demo: { icon: 'fas fa-external-link-alt', label: 'Live Demo' },
    documentation: { icon: 'fas fa-book', label: 'Documentation' },
    // Known types rendered without an icon, but with a properly cased label.
    pypi: { label: 'PyPI' },
    article: { label: 'Article' },
};

const formatLinkLabel = (key: string): string =>
    key.charAt(0).toUpperCase() + key.slice(1);

const ProjectContainer = styled.div`
  color: ${gray1};
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${gray1};
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: rgba(144, 205, 244, 0.15);
  color: ${blue1};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ExperienceBadge = styled.a`
  background: rgba(144, 205, 244, 0.15);
  color: ${blue1};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
  }
`;

const PersonalBadge = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${gray1};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const StatusDot = styled.span<{ status: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ status }) => status === 'Production' ? '#4ade80' : status === 'Beta' ? '#fbbf24' : '#f87171'};
  margin-right: 6px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(144, 205, 244, 0.3);
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.25rem 0;
  }

  strong {
    color: ${blue1};
    font-weight: 600;
  }
`;

const parseDescription = (text: string): React.ReactNode => {
    if (!text) return null;

    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let inList = false;
    let listItems: React.ReactNode[] = [];
    let paragraphLines: string[] = [];

    const flushParagraph = () => {
        if (paragraphLines.length > 0) {
            const paragraphText = paragraphLines.join(' ');
            elements.push(
                <p key={`p-${elements.length}`}>
                    {parseInlineFormatting(paragraphText)}
                </p>
            );
            paragraphLines = [];
        }
    };

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={`ul-${elements.length}`}>
                    {listItems.map((item, index) => (
                        <li key={`li-${index}`}>{item}</li>
                    ))}
                </ul>
            );
            listItems = [];
        }
    };

    const parseInlineFormatting = (line: string): React.ReactNode => {
        // Parse **text** for bold formatting
        const parts: React.ReactNode[] = [];
        const regex = /\*\*(.+?)\*\*/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(line)) !== null) {
            if (match.index > lastIndex) {
                parts.push(line.substring(lastIndex, match.index));
            }
            parts.push(<strong key={`b-${match.index}`}>{match[1]}</strong>);
            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < line.length) {
            parts.push(line.substring(lastIndex));
        }

        return parts.length > 0 ? parts : line;
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Check if line is a bullet point
        if (line.startsWith('- ') || line.startsWith('* ')) {
            flushParagraph();
            inList = true;
            const content = line.substring(2);
            listItems.push(parseInlineFormatting(content));
        } else if (line === '') {
            // Empty line - flush both paragraph and list
            flushParagraph();
            flushList();
        } else {
            flushList();
            inList = false;
            paragraphLines.push(line);
        }
    }

    // Flush remaining content
    flushParagraph();
    flushList();

    return elements;
};

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ImageItem = styled.img`
  width: 100%;
  border-radius: 4px;
  background: ${black2};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(144, 205, 244, 0.2);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.15);
  color: ${blue1};
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid rgba(144, 205, 244, 0.3);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
    transform: translateY(-2px);
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`;

const ModalClose = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: ${gray1};
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${blue1};
  }
`;

const ModalNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(144, 205, 244, 0.2);
  border: none;
  color: ${blue1};
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.4);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ModalNavPrev = styled(ModalNav)`
  left: -80px;
`;

const ModalNavNext = styled(ModalNav)`
  right: -80px;
`;

const ModalCounter = styled.div`
  color: ${gray1};
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Project: React.FC = () => {
    const { id } = useParams();
    const posthog = usePostHog();
    const [project, setProject] = useState<ProjectType | null>(null)
    const [loading, setLoading] = useState(true);
    const [experience, setExperience] = useState<Experience | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Kept in a ref so the title is available in the time-tracking cleanup
    // without making that effect re-run (and reset the timer) on load.
    const projectTitleRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        projectTitleRef.current = project?.title;
    }, [project]);

    // Measure how long the visitor stays on a project page. The effect is keyed
    // on `id` only, so the timer starts once per project and the cleanup fires
    // on unmount or when navigating to another project.
    useEffect(() => {
        if (!id) return;
        const startTime = Date.now();
        return () => {
            const timeSpentSeconds = Math.round((Date.now() - startTime) / 1000);
            if (timeSpentSeconds < 1) return;
            posthog?.capture('project_view_time', {
                project_id: id,
                project_title: projectTitleRef.current,
                time_spent_seconds: timeSpentSeconds,
            });
            if (timeSpentSeconds > 20) {
                posthog?.setPersonProperties({ is_engaged_reader: true });
            }
        };
    }, [id, posthog]);

    useEffect(() => {
        const loadContent = async () => {
            setLoading(true);
            try {
                const projects = await getProjects()
                const foundProject = projects.find((project) => String(project.id) === id) || null
                setProject(foundProject)

                if (foundProject?.experienceId && foundProject.experienceId > 0) {
                    const exp = await getExperienceById(foundProject.experienceId);
                    setExperience(exp || null);
                } else {
                    setExperience(null);
                }
            } finally {
                setLoading(false);
            }
        }
        loadContent()
    }, [id])

    const openModal = useCallback((index: number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
        posthog?.capture('project_image_modal_opened', { project_id: id, image_index: index });
    }, [id, posthog]);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    const previousImage = useCallback(() => {
        if (project && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }, [project, currentImageIndex]);

    const nextImage = useCallback(() => {
        if (project && currentImageIndex < project.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }, [project, currentImageIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalOpen) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') previousImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen, closeModal, previousImage, nextImage]);

    if (loading) {
        return <ProjectContainer><ContentWrapper>Loading...</ContentWrapper></ProjectContainer>;
    }

    if (!project) {
        return <NotFound />;
    }

    return (
        <ProjectContainer>
            <ContentWrapper>
                <BackLink to="/portfolio/projects">← Back to Projects</BackLink>
                
                <ProjectHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectMeta>
                        <Badge><StatusDot status={project.status} />{project.status}</Badge>
                        <Badge>{project.category}</Badge>
                        {experience ? (
                            <ExperienceBadge href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                                {experience.company} ({experience.startDate} - {experience.endDate})
                            </ExperienceBadge>
                        ) : (
                            <PersonalBadge>Personal Project</PersonalBadge>
                        )}
                    </ProjectMeta>
                </ProjectHeader>

                <Section>
                    <SectionTitle>About</SectionTitle>
                    <Description>{parseDescription(project.longDescription)}</Description>
                </Section>

                <Section>
                    <SectionTitle>Tags</SectionTitle>
                    <TagsContainer>
                        {project.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </TagsContainer>
                </Section>

                <Section>
                    <SectionTitle>Technologies</SectionTitle>
                    <TechnologiesList>
                        {project.technologies.map((tech) => (
                            <TechItem key={tech}>
                                <i className={`fab fa-${tech}`} style={{ color: blue1, fontSize: '1.1rem' }} />
                                <span>{tech}</span>
                            </TechItem>
                        ))}
                    </TechnologiesList>
                </Section>

                {project.images && project.images.length > 0 && (
                    <Section>
                        <SectionTitle>Project Images</SectionTitle>
                        <ImagesGrid>
                            {project.images.map((image, index) => (
                                <ImageItem 
                                    key={index}
                                    src={image} 
                                    alt={`${project.title} - Image ${index + 1}`}
                                    onClick={() => openModal(index)}
                                />
                            ))}
                        </ImagesGrid>
                    </Section>
                )}

                {project.links && (Object.keys(project.links).length > 0) && (
                    <Section>
                        <SectionTitle>Links</SectionTitle>
                        <LinksContainer>
                            {Object.entries(project.links).map(([linkType, value]) => {
                                if (!value) return null;
                                const meta = LINK_META[linkType];
                                const icon = meta?.icon;
                                const label = meta?.label ?? formatLinkLabel(linkType);
                                const urls = Array.isArray(value) ? value : [value];
                                return urls.map((url, index) => (
                                    <LinkButton key={`${linkType}-${index}`} href={url} target="_blank" rel="noopener noreferrer" onClick={() => posthog?.capture('project_link_clicked', { project_id: id, link_type: linkType, url })}>
                                        {icon && <i className={icon}></i>} {label}{urls.length > 1 ? ` #${index + 1}` : ''}
                                    </LinkButton>
                                ));
                            })}
                        </LinksContainer>
                    </Section>
                )}
            </ContentWrapper>

            {/* Image Modal */}
            {modalOpen && project && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalClose onClick={closeModal}>&times;</ModalClose>
                        <ModalNavPrev onClick={previousImage} disabled={currentImageIndex === 0}>
                            ‹
                        </ModalNavPrev>
                        <ModalImage 
                            src={project.images[currentImageIndex]} 
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        />
                        <ModalNavNext onClick={nextImage} disabled={currentImageIndex === project.images.length - 1}>
                            ›
                        </ModalNavNext>
                        <ModalCounter>
                            {currentImageIndex + 1} / {project.images.length}
                        </ModalCounter>
                    </ModalContent>
                </ModalOverlay>
            )}
        </ProjectContainer>
    );
};

export default Project; 