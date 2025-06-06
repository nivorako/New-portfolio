
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <Skills />
    </HomeContainer>
  );
};

export default Home;
