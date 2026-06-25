import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blue1, gray1, gray2 } from '../../contantes/color';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
  color: ${gray1};
`;

const Code = styled.h1`
  font-size: 6rem;
  margin: 0;
  color: ${blue1};
  line-height: 1;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
`;

const SubMessage = styled.p`
  color: ${gray2};
  margin: 0 0 2rem;
`;

const HomeLink = styled(Link)`
  color: ${blue1};
  text-decoration: none;
  border: 1px solid ${blue1};
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${blue1};
    color: #030711;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Code>404</Code>
      <Message>Page introuvable</Message>
      <SubMessage>La page que vous cherchez n'existe pas ou a été déplacée.</SubMessage>
      <HomeLink to="/portfolio">Retour à l'accueil</HomeLink>
    </NotFoundContainer>
  );
};

export default NotFound;
