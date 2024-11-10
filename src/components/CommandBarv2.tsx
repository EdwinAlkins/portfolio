import React from 'react';
import styled from 'styled-components';
import { Command } from 'cmdk';
import { blue1, black1, black2, gray1 } from '../contantes/color';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledCommand = styled(Command)`
  width: 100%;
  background: ${black2};
  border-radius: 8px;
  overflow: hidden;
  
  [cmdk-input] {
    width: 100%;
    padding: 8px 36px 8px 12px;
    border: 1px solid gray;
    font-size: 0.875rem;
    background: ${black2};
    color: ${gray1};
    
    &:focus {
      outline: none;
      border-color: ${blue1};
    }
  }

  [cmdk-list] {
    max-height: 400px;
    overflow: auto;
    overscroll-behavior: contain;
    position: absolute;
    width: 100%;
    background: ${black2};
    border: 1px solid ${black1};
    border-radius: 6px;
    margin-top: 8px;
  }

  [cmdk-item] {
    content-visibility: auto;
    cursor: pointer;
    padding: 8px 12px;
    color: ${gray1};
    display: flex;
    align-items: center;
    gap: 8px;
    
    &[data-selected="true"] {
      background: ${blue1};
      color: white;
    }
  }

  [cmdk-group-heading] {
    color: ${gray1};
    font-size: 0.8rem;
    padding: 8px 12px;
    opacity: 0.7;
  }
`;

const ShortcutHint = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: none;
`;

const KeyboardKey = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.75rem;
  color: ${gray1};
`;

export const CommandBar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <SearchContainer>
      <StyledCommand shouldFilter={true}>
        <Command.Input
          placeholder="Search..."
          onClick={() => setOpen(true)}
        />
        {open && (
          <>
            <Command.List>
              <Command.Empty>No results found.</Command.Empty>

              <Command.Group heading="Navigation">
                <Command.Item onSelect={() => navigate('/')}>
                  <i className="fas fa-home" /> Home
                </Command.Item>
                <Command.Item onSelect={() => navigate('/about')}>
                  <i className="fas fa-user" /> About
                </Command.Item>
                <Command.Item onSelect={() => navigate('/experience')}>
                  <i className="fas fa-briefcase" /> Experience
                </Command.Item>
                <Command.Item onSelect={() => navigate('/projects')}>
                  <i className="fas fa-code" /> Projects
                </Command.Item>
                <Command.Item onSelect={() => navigate('/articles')}>
                  <i className="fas fa-newspaper" /> Articles
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Social">
                <Command.Item onSelect={() => window.open('https://github.com/EdwinAlkins', '_blank')}>
                  <i className="fab fa-github" /> GitHub
                </Command.Item>
                <Command.Item onSelect={() => window.open('https://www.linkedin.com/in/william-nauroy1998', '_blank')}>
                  <i className="fab fa-linkedin" /> LinkedIn
                </Command.Item>
                <Command.Item onSelect={() => window.open('/pdf/resumewn.pdf', '_blank')}>
                  <i className="far fa-file-alt" /> Resume
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
              }}
              onClick={() => setOpen(false)}
            />
          </>
        )}
      </StyledCommand>
      <ShortcutHint>
        <KeyboardKey>⌘  K</KeyboardKey>
      </ShortcutHint>
    </SearchContainer>
  );
};