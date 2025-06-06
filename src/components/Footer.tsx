
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const FooterContainer = styled.footer`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
`;

const FooterSection = styled.div`
    h3 {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        position: relative;
        display: inline-block;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 50px;
            height: 3px;
            background: white;
        }
    }
`;

const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const FooterLink = styled(Link)`
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        color: white;
        transform: translateX(5px);
    }

    svg {
        width: 1rem;
        height: 1rem;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const SocialLink = styled.a`
    color: white;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: white;
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-3px);
    }
`;

const Copyright = styled.div`
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgba(255, 255, 255, 0.8);

    svg {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <FooterContainer>
            <FooterContent>
                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <FooterSection>
                        <motion.h3 variants={itemVariants}>Nivo Rakoto</motion.h3>
                        <motion.p
                            variants={itemVariants}
                            style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}
                        >
                            Développeur passionné créant des expériences numériques exceptionnelles
                            avec des technologies modernes.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <SocialLinks>
                                {['twitter', 'github', 'linkedin', 'instagram'].map(social => (
                                    <SocialLink
                                        key={social}
                                        href={`https://${social}.com/yourusername`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social}
                                    >
                                        <i className={`fab fa-${social}`}></i>
                                    </SocialLink>
                                ))}
                            </SocialLinks>
                        </motion.div>
                    </FooterSection>
                </motion.div>

                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <FooterSection>
                        <motion.h3 variants={itemVariants}>Liens rapides</motion.h3>
                        <FooterLinks>
                            {[
                                { to: '/', text: 'Accueil' },
                                { to: '/about', text: 'À propos' },
                                { to: '/projects', text: 'Projets' },
                                { to: '/contact', text: 'Contact' },
                            ].map((link, index) => (
                                <motion.li key={link.to} variants={itemVariants} custom={index}>
                                    <FooterLink to={link.to}>
                                        <i className="fas fa-chevron-right"></i>
                                        {link.text}
                                    </FooterLink>
                                </motion.li>
                            ))}
                        </FooterLinks>
                    </FooterSection>
                </motion.div>

                <motion.div
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <FooterSection>
                        <motion.h3 variants={itemVariants}>Contact</motion.h3>
                        <ContactInfo>
                            <motion.div variants={itemVariants}>
                                <ContactItem>
                                    <MapPinIcon />
                                    <span>Antananarivo, Madagascar</span>
                                </ContactItem>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ContactItem>
                                    <EnvelopeIcon />
                                    <span>contact@nivorakoto.com</span>
                                </ContactItem>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ContactItem>
                                    <PhoneIcon />
                                    <span>+261 34 XX XXX XX</span>
                                </ContactItem>
                            </motion.div>
                        </ContactInfo>
                    </FooterSection>
                </motion.div>
            </FooterContent>

            <Copyright>&copy; {currentYear} Nivo Rakoto. Tous droits réservés.</Copyright>
        </FooterContainer>
    );
};

export default Footer;
