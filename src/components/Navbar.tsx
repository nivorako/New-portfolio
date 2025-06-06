import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLinksProps {
    isOpen: boolean;
}

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: center;
    transition: 0.5s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    z-index: 1001;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const navLinks = [
    { to: '/', text: 'Accueil' },
    { to: '/about', text: 'À propos' },
    { to: '/projects', text: 'Projets' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavContainer>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo to="/" onClick={closeMenu}>
            Nivo Rakoto
          </Logo>
        </motion.div>

        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon width={24} height={24} />
          ) : (
            <Bars3Icon width={24} height={24} />
          )}
        </MobileMenuButton>

        <NavLinks isOpen={isOpen}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              onClick={closeMenu}
            >
              <NavLink
                to={link.to}
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.text}
              </NavLink>
            </motion.div>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
