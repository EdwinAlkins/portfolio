import React, { useState } from 'react';
import styled from 'styled-components';
import { CommandBar } from '../../components/CommandBarv2';
import { blue1, black1, gray1 } from '../../contantes/color';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem;
  background-color: ${black1};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${blue1};
  flex: 0 0 auto;
`;

const SearchContainer = styled.div`
  flex: 0 1 400px;
  margin: 0 2rem;
  
  @media (max-width: 768px) {
    flex: 0 1 200px;
    margin: 0 1rem;
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 3rem;
    right: 0;
    background-color: ${black1};
    padding: 1rem;
    width: 100px;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${gray1};
  font-weight: 500;
  
  &:hover {
    color: ${blue1};
  }
`;

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${gray1};
  transition: transform 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &.open {
    svg {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${gray1};
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 4px;
      transform-origin: left center;
      ${({ isOpen }) => isOpen && `
        transform: rotate(45deg);
        top: 3px;
        left: 4px;
      `}
    }

    &:nth-child(2) {
      top: 11px;
      transform-origin: left center;
      ${({ isOpen }) => isOpen && `
        width: 0%;
        opacity: 0;
      `}
    }

    &:nth-child(3) {
      top: 18px;
      transform-origin: left center;
      ${({ isOpen }) => isOpen && `
        transform: rotate(-45deg);
        top: 20px;
        left: 4px;
      `}
    }
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
          YourLogo
        </Link>
      </Logo>

      <SearchContainer>
        <CommandBar />
      </SearchContainer>

      <BurgerButton onClick={toggleMenu}>
        <BurgerIcon isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </BurgerIcon>
      </BurgerButton>

      <Navigation isOpen={isMenuOpen}>
        <NavLink to="/portfolio/about" onClick={toggleMenu} >About</NavLink>
        <NavLink to="/portfolio/experience" onClick={toggleMenu}>Experience</NavLink>
        <NavLink to="/portfolio/projects" onClick={toggleMenu}>Projects</NavLink>
        <NavLink to="/portfolio/articles" onClick={toggleMenu}>Articles</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
