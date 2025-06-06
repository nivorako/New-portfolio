import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const AppContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 2rem;
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <Navbar />
                <AppContent>
                  <MainContent>
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/project" element={<Project />} />
                          <Route path="/contact" element={<Contact />} />
                      </Routes>
                  </MainContent>
                </AppContent>
                <Footer />
            </AppContainer>
        </Router>
    );
}

export default App;
