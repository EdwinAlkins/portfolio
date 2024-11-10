import React from 'react';
import styled from 'styled-components';
import { CommandBar } from '../../components/CommandBarv2';
import { blue1, black1, gray1 } from '../../contantes/color';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${black1};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${blue1};
`;

const SearchContainer = styled.div`
  flex: 0 1 400px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${gray1};
  font-weight: 500;
  
  &:hover {
    color: ${blue1};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          YourLogo
        </Link>
      </Logo>
      
      <SearchContainer>
        <CommandBar />
      </SearchContainer>
      
      <Navigation>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/articles">Articles</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
