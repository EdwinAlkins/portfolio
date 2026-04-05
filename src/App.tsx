import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import styled from 'styled-components';
import { black1 } from './contantes/color';

// Lazy loaded components
const About = lazy(() => import('./views/About/About'));
const Experience = lazy(() => import('./views/Experience/Experience'));
const Projects = lazy(() => import('./views/Projects/Projects'));
const Project = lazy(() => import('./views/Projects/Project'));
const Articles = lazy(() => import('./views/Articles/Articles'));
const Article = lazy(() => import('./views/Articles/Article'));

const AppContainer = styled.div`
  background-color: ${black1};
  min-height: 100vh;
`;

const PageContainer = styled.div`
  // Add padding-top if needed based on your header height
  // padding-top: 80px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${black1};
  font-size: 1.2rem;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <PageContainer>
          <Suspense fallback={<LoadingContainer>Chargement...</LoadingContainer>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/about" element={<About />} />
              <Route path="/portfolio/experience" element={<Experience />} />
              <Route path="/portfolio/projects" element={<Projects />} />
              <Route path="/portfolio/project/:id" element={<Project />} />
              <Route path="/portfolio/articles" element={<Articles />} />
              <Route path="/portfolio/article/:id" element={<Article />} />
            </Routes>
          </Suspense>
        </PageContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
