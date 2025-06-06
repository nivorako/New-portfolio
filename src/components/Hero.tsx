import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
  color: white;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Nivo Rakotondrabe</h1>
        <p>Développeur Web Full Stack</p>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;