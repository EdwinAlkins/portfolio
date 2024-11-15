import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import styled from 'styled-components';
import { black1 } from './contantes/color';
import About from './views/About/About';
import Experience from './views/Experience/Experience';
import Projects from './views/Projects/Projects';
import Articles from './views/Articles/Articles';
import Article from './views/Articles/Article';
import Project from './views/Projects/Project';

const AppContainer = styled.div`
  background-color: ${black1};
  min-height: 100vh;
`;

const PageContainer = styled.div`
  // Add padding-top if needed based on your header height
  // padding-top: 80px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <PageContainer>
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
        </PageContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
