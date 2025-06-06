import React from 'react';
import styled from 'styled-components';
//import { motion } from 'framer-motion';

const SkillsSection = styled.section`
    padding: 6rem 2rem;
    background: ${({ theme }) => theme.colors.background};
    
    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .skill-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }

        h3 {
            color: ${({ theme }) => theme.colors.primary};
            margin-bottom: 1rem;
        }

        p {
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;

const Skills: React.FC = () => {
    return (
        <SkillsSection>
            <div className="container">
                <h2>Mes compétences</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Développement Frontend</h3>
                        <p>React, TypeScript, Styled-components, Framer Motion</p>
                    </div>
                    <div className="skill-card">
                        <h3>Développement Backend</h3>
                        <p>Node.js, Express, MongoDB, PostgreSQL</p>
                    </div>
                    <div className="skill-card">
                        <h3>Outils & Technologies</h3>
                        <p>Git, Docker, Vite, ESLint, Prettier</p>
                    </div>
                </div>
            </div>
        </SkillsSection>
    );
};

export default Skills;