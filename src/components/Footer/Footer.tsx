import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  margin-top: 4rem;
  background: linear-gradient(to right, #000000, #110118ff);
  color: white;
  padding: 2.5rem 0;
`;

const GradientDiv = styled.div`
  pointer-events: none;
  position: absolute;
  inset-x: 0;
  top: -2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.04), transparent);
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Col1 = styled.div`
  @media (min-width: 768px) {
    grid-column: span 5;
  }
`;

const Col2 = styled.div`
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`;

const Col3 = styled.div`
  @media (min-width: 768px) {
    grid-column: span 3;
  }
`;

const Name = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`;

const Role = styled.p`
  font-size: 0.900rem;
  color: rgba(255,255,255,0.6);
`;

const Socials = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  transition: all 0.3s;
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    color: white;
  }
`;

const Icon = styled.span`
  font-size: 1rem;
  transition: transform 0.3s;
  ${SocialLink}:hover & {
    transform: scale(1.1);
  }
`;

const Underline = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 0;
    height: 2px;
    background: #6809a7;
    transition: width 0.3s;
  }
  ${SocialLink}:hover &::after {
    width: 100%;
  }
`;

const NavHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`;

const Nav = styled.nav`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.5rem;
  font-size: 1rem;
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-decoration: none;
  color: rgba(255,255,255,0.9);
  transition: color 0.3s;
  &:hover {
    color: white;
  }
`;

const Arrow = styled.span`
  font-size: 0.9rem;
  opacity: 0;
  transform: translateX(-0.25rem);
  transition: all 0.3s;
  ${NavLink}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StatusHeading = styled.p`
  font-size: 1;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
`;

const StatusCard = styled.div`
  margin-top: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  padding: 1rem;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
`;

const Dot = styled.span`
  position: relative;
  display: inline-flex;
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
  background: #6809a7;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: rgba(178, 123, 196, 0.7);
    animation: ${ping} 1s infinite;
  }
`;

const StatusText = styled.p`
  font-size: 1;
  color: rgba(255,255,255,0.9);
`;

const StatusBody = styled.p`
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.625;
  color: rgba(255,255,255,0.9);
`;

const BottomBar = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const BottomText = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.9)
`;

export default function Footer() {
  const year = new Date().getFullYear();
  const t = (key: string) => key; 

  interface NavLink {
    label: string;
    href: string;
  }

  interface SocialLink {
    label: string;
    href: string;
    icon: React.ReactNode;
  }

  const navLinks: NavLink[] = [
    { label: t("Inicio"), href: "#" },
    { label: t("Sobre mim"), href: "#about-me" },
    { label: t("Habilidades"), href: "#skills" },
    { label: t("Experiência"), href: "#experience" },
    { label: t("Projetos"), href: "#projects" },
  ];

  const socials: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/jhonherikgc", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jhonherikgc", icon: <FaLinkedin /> },
    { label: t("Email"), href: "mailto:jhonherik006@gmail.com", icon: <FaEnvelope /> },
    { label: "Instagram", href: "https://www.instagram.com/jhonherikgc/", icon: <FaInstagram /> },
    { label: t("Discord"), href: "https://discord.com/users/1170099561260404848", icon: <FaDiscord /> },
  ];

  return (
    <StyledFooter id="footer">
      <GradientDiv />
      <Container>
        <Grid>
          <Col1>
            <div className="flex items-center gap-3">
              <div>
                <Name>Jhon Herik Gomes de Castro</Name>
                <Role>{t("Desenvolvedor Full-Stack.")}</Role>
              </div>
            </div>
            <Socials>
              {socials.map((s) => (
                <SocialLink
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                >
                  <Icon>{s.icon}</Icon>
                  <Underline>{s.label}</Underline>
                </SocialLink>
              ))}
            </Socials>
          </Col1>
          <Col2>
            <NavHeading>{t("Navegação")}</NavHeading>
            <Nav>
              {navLinks.map((l) => (
                <NavLink key={l.href} href={l.href}>
                  <Underline>{l.label}</Underline>
                  <Arrow>↗</Arrow>
                </NavLink>
              ))}
            </Nav>
          </Col2>
          <Col3>
            <StatusHeading>{t("Status")}</StatusHeading>
            <StatusCard>
              <StatusIndicator>
                <Dot />
                <StatusText>{t("Aberto para oportunidades e projetos free-lances")}</StatusText>
              </StatusIndicator>
              <StatusBody>{t("Tem algum projeto em mente? Vamos conversar!")}</StatusBody>
            </StatusCard>
          </Col3>
        </Grid>
        <BottomBar>
          <BottomText>© {year} Jhon Herik Gomes de Castro. {t("Todos os direitos reservados.")}</BottomText>
          <BottomText>{t("Feito com Paciência e Código.")}</BottomText>
        </BottomBar>
      </Container>
    </StyledFooter>
  );
}