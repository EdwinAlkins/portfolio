import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Command } from 'cmdk';
import { blue1, black2, gray1 } from '../contantes/color';
import { useNavigate } from 'react-router-dom';
import { getProjects, getArticles } from '../utils/dbUtils';
import { Project, Article } from '../type';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 40px;
    height: 40px;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOverlay = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledCommand = styled(Command)<{ $isMobile?: boolean }>`
  width: 100%;
  background: ${black2};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${blue1};
  }

  [cmdk-input] {
    width: 100%;
    padding: 12px 48px 12px 16px;
    border: none;
    font-size: 0.95rem;
    background: transparent;
    color: ${gray1};

    &::placeholder {
      color: ${gray1};
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }

  [cmdk-list] {
    max-height: 350px;
    overflow: auto;
    overscroll-behavior: contain;
    position: absolute;
    width: calc(100% - 2px);
    background: ${black2};
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin-top: 8px;
    z-index: 1001;
    animation: ${fadeIn} 0.15s ease-out;
  }

  [cmdk-item] {
    content-visibility: auto;
    cursor: pointer;
    padding: 10px 14px;
    color: ${gray1};
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    border-radius: 4px;
    margin: 2px 4px;
    transition: background 0.15s ease;

    &[data-selected="true"] {
      background: rgba(144, 205, 244, 0.2);
      color: ${blue1};
    }

    &:hover {
      background: rgba(144, 205, 244, 0.1);
    }
  }

  [cmdk-group-heading] {
    color: ${gray1};
    font-size: 0.75rem;
    padding: 8px 14px 4px;
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  [cmdk-empty] {
    padding: 24px;
    text-align: center;
    color: ${gray1};
    opacity: 0.5;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    &:not([data-opened="true"]) {
      [cmdk-input] {
        width: 40px;
        height: 40px;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        font-size: 0;
        background: ${black2};

        &::before {
          content: '⌘';
          font-size: 1.1rem;
          color: ${gray1};
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        &::placeholder {
          opacity: 0;
        }
      }
    }

    &[data-opened="true"] {
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 32px);
      max-width: none;
      z-index: 1001;

      [cmdk-input] {
        font-size: 1rem;
        padding: 14px 48px 14px 16px;
        background: ${black2};
      }

      [cmdk-list] {
        position: relative;
        width: 100%;
        max-height: 60vh;
      }
    }
  }
`;

const ShortcutHint = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const KeyboardKey = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.7rem;
  color: ${gray1};
  font-weight: 500;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1000;
  animation: ${fadeOverlay} 0.15s ease-out;
`;

const SearchResultIcon = styled.i<{ $type: string }>`
  color: ${({ $type }) => $type === 'project' ? '#60a5fa' : $type === 'article' ? '#34d399' : gray1};
  font-size: 1rem;
  min-width: 16px;
`;

const SearchResultTitle = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SearchResultCategory = styled.span`
  font-size: 0.75rem;
  opacity: 0.5;
  margin-left: 8px;
`;

export const CommandBar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [search, setSearch] = React.useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const [projectsData, articlesData] = await Promise.all([
        getProjects(),
        getArticles()
      ]);
      setProjects(projectsData);
      setArticles(articlesData);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
    if (open) {
      setSearch('');
    }
  }, [open]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <SearchContainer>
      <StyledCommand 
        shouldFilter={true} 
        data-opened={open}
        $isMobile={window.innerWidth <= 768}
        label="Command Menu"
      >
        <Command.Input 
          ref={inputRef}
          value={search}
          onValueChange={setSearch}
          placeholder={open ? "Search pages, projects, articles..." : "Search..."}
          onClick={() => setOpen(true)}
        />
        {open && (
          <>
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>

              <Command.Group heading="Pages">
                <Command.Item 
                  value="home" 
                  keywords={['accueil', 'main', 'landing']}
                  onSelect={() => handleNavigate('/portfolio')}
                >
                  <SearchResultIcon className="fas fa-home" $type="page" />
                  <SearchResultTitle>Home</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="about" 
                  keywords={['about', 'me', 'bio', 'profile']}
                  onSelect={() => handleNavigate('/portfolio/about')}
                >
                  <SearchResultIcon className="fas fa-user" $type="page" />
                  <SearchResultTitle>About</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="experience" 
                  keywords={['experience', 'work', 'job', 'career']}
                  onSelect={() => handleNavigate('/portfolio/experience')}
                >
                  <SearchResultIcon className="fas fa-briefcase" $type="page" />
                  <SearchResultTitle>Experience</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="projects" 
                  keywords={['projects', 'portfolio', 'code']}
                  onSelect={() => handleNavigate('/portfolio/projects')}
                >
                  <SearchResultIcon className="fas fa-code" $type="page" />
                  <SearchResultTitle>Projects</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="articles" 
                  keywords={['articles', 'blog', 'posts', 'writing']}
                  onSelect={() => handleNavigate('/portfolio/articles')}
                >
                  <SearchResultIcon className="fas fa-newspaper" $type="page" />
                  <SearchResultTitle>Articles</SearchResultTitle>
                </Command.Item>
              </Command.Group>

              {projects.length > 0 && (
                <Command.Group heading="Projects">
                  {projects.map((project) => (
                    <Command.Item
                      key={project.id}
                      value={project.title.toLowerCase()}
                      keywords={[project.title, project.category, ...project.tags, ...project.technologies].map(k => k.toLowerCase())}
                      onSelect={() => handleNavigate(`/portfolio/project/${project.id}`)}
                    >
                      <SearchResultIcon className="fas fa-folder" $type="project" />
                      <SearchResultTitle>{project.title}</SearchResultTitle>
                      <SearchResultCategory>{project.category}</SearchResultCategory>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {articles.length > 0 && (
                <Command.Group heading="Articles">
                  {articles.map((article) => (
                    <Command.Item
                      key={article.id}
                      value={article.title.toLowerCase()}
                      keywords={[article.title, article.title].map(k => k.toLowerCase())}
                      onSelect={() => handleNavigate(`/portfolio/article/${article.id}`)}
                    >
                      <SearchResultIcon className="fas fa-file-alt" $type="article" />
                      <SearchResultTitle>{article.title}</SearchResultTitle>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              <Command.Group heading="Links">
                <Command.Item 
                  value="github" 
                  keywords={['github', 'code', 'repo', 'git']}
                  onSelect={() => handleOpenLink('https://github.com/EdwinAlkins')}
                >
                  <SearchResultIcon className="fab fa-github" $type="page" />
                  <SearchResultTitle>GitHub Profile</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="linkedin" 
                  keywords={['linkedin', 'network', 'professional']}
                  onSelect={() => handleOpenLink('https://www.linkedin.com/in/william-nauroy1998')}
                >
                  <SearchResultIcon className="fab fa-linkedin" $type="page" />
                  <SearchResultTitle>LinkedIn</SearchResultTitle>
                </Command.Item>
                <Command.Item 
                  value="resume" 
                  keywords={['resume', 'cv', 'resume', 'document']}
                  onSelect={() => handleOpenLink('/portfolio/pdf/resumewn.pdf')}
                >
                  <SearchResultIcon className="far fa-file-alt" $type="page" />
                  <SearchResultTitle>Resume</SearchResultTitle>
                </Command.Item>
              </Command.Group>
            </Command.List>
            <Overlay onClick={() => setOpen(false)} />
          </>
        )}
      </StyledCommand>
      {!open && (
        <ShortcutHint>
          <KeyboardKey>⌘</KeyboardKey>
          <KeyboardKey>K</KeyboardKey>
        </ShortcutHint>
      )}
    </SearchContainer>
  );
};