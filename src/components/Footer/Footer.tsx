import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  /* Removido margin-top para eliminar o espaço cinza entre as seções */
  margin-top: 0; 
  background: linear-gradient(to right, #000000, #110118ff);
  color: white;
  padding: 3rem 0; /* Aumentado levemente o padding para compensar a falta da margem */
`;

/* O GradientDiv foi removido para eliminar a sombra cinza no topo */

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
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.95);
`;

const Role = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  margin-top: 0.25rem;
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
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.7);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.2rem);
    background: rgba(255,255,255,0.1);
    border-color: #6809a7;
    color: white;
  }
`;

const Icon = styled.span`
  font-size: 1.1rem;
`;

const Underline = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
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
  color: white;
  margin-bottom: 1.25rem;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  color: rgba(255,255,255,0.7);
  font-size: 0.95rem;
  transition: color 0.3s;
  
  &:hover {
    color: white;
  }
`;

const StatusHeading = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.25rem;
`;

const StatusCard = styled.div`
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
  padding: 1.25rem;
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2.2); opacity: 0; }
`;

const Dot = styled.span`
  position: relative;
  display: inline-flex;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background: #6809a7;
  flex-shrink: 0;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #6809a7;
    animation: ${ping} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

const StatusText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255,255,255,0.9);
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BottomText = styled.p`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
`;

const RECIPIENT_EMAIL = 'jhonherik006@gmail.com';
const EMAIL_SUBJECT = 'Contato via Portfólio - Dúvidas - Projetos - Melhorias - Sugestões';
const EMAIL_BODY = 'Olá, como podemos criar juntos?';
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Sobre mim", href: "#about-me" },
    { label: "Habilidades", href: "#skills" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/jhonherikgc", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jhonherikgc", icon: <FaLinkedin /> },
    { label: "Email", href: `${GMAIL_COMPOSE_URL}`, icon: <FaEnvelope /> },
    { label: "Instagram", href: "https://www.instagram.com/jhonherikgc/", icon: <FaInstagram /> },
    { label: "Discord", href: "https://discord.com/users/1170099561260404848", icon: <FaDiscord /> },
  ];

  return (
    <StyledFooter id="footer">
      <Container>
        <Grid>
          <Col1>
            <div>
              <Name>Jhon Herik Gomes de Castro</Name>
              <Role>Desenvolvedor Full-Stack</Role>
            </div>
            <Socials>
              {socials.map((s) => (
                <SocialLink
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <Icon>{s.icon}</Icon>
                  <Underline>{s.label}</Underline>
                </SocialLink>
              ))}
            </Socials>
          </Col1>

          <Col2>
            <NavHeading>Navegação</NavHeading>
            <Nav>
              {navLinks.map((l) => (
                <NavLink key={l.label} href={l.href}>
                  <Underline>{l.label}</Underline>
                </NavLink>
              ))}
            </Nav>
          </Col2>

          <Col3>
            <StatusHeading>Status</StatusHeading>
            <StatusCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Dot />
                <StatusText>Aberto para oportunidades e projetos freelances</StatusText>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>
                Tem algum projeto em mente? Vamos conversar!
              </p>
            </StatusCard>
          </Col3>
        </Grid>

        <BottomBar>
          <BottomText>© {year} Jhon Herik Gomes de Castro. Todos os direitos reservados.</BottomText>
          <BottomText>Feito com Paciência e Código.</BottomText>
        </BottomBar>
      </Container>
    </StyledFooter>
  );
}