{
  /* Componente de Navbar */
}
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// --- Interfaces ---
interface NavItem {
  name: string;
  link: string;
}

// --- Styled Components ---
const NavWrapper = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* Crucial para centralizar quando a largura diminuir */
  z-index: 100;
  padding: 0 1rem;
  transform: ${(props) =>
    props.$isScrolled ? "translateY(-100%)" : "translateY(0)"};
  opacity: ${(props) => (props.$isScrolled ? 0 : 1)};
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

const DesktopContainer = styled(motion.div)<{ $isScrolled: boolean }>`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Transição de cores: mais escuro no scroll para legibilidade */
    background: ${(props) =>
      props.$isScrolled ? "rgba(17, 1, 24, 0.85)" : "rgba(170, 127, 194, 0.1)"};
    backdrop-filter: blur(20px);
    border: 1px solid rgba(104, 9, 167, 0.3);
    border-radius: 9999px;
    color: white;
    box-shadow: ${(props) =>
      props.$isScrolled
        ? "0 10px 30px rgba(0, 0, 0, 0.5)"
        : "0 8px 32px rgba(0, 0, 0, 0.2)"};
  }
`;
{
  /* Navbar mobile container*/
}
const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(17, 1, 24, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(104, 9, 167, 0.3);
  border-radius: 1.5rem;
  padding: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LogoSymbol = styled.div`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 12px rgba(104, 9, 167, 0.6);
  }
`;

{
  /* Espaçamento de botões */
}
const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const LinkItem = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;

  &:hover {
    color: white;
  }

  /* Linha decorativa no hover */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6809a7;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
{
  /* Navbar menu = */
}
const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(104, 9, 167, 0.2);
`;

// --- Componente Principal ---
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { name: "Sobre mim", link: "#about-me" },
    { name: "Experiência", link: "#experience" },
    { name: "Habilidades", link: "#skills" },
    { name: "Projetos", link: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavWrapper $isScrolled={scrolled}>
      {/* Desktop Version */}
      <DesktopContainer
        $isScrolled={scrolled}
        initial={false}
        animate={{
          // Encolhe e centraliza no scroll
          width: scrolled ? "65%" : "100%",
          maxWidth: scrolled ? "850px" : "1200px",
          padding: scrolled ? "0.6rem 2.5rem" : "1rem 3.5rem",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <LogoSymbol onClick={scrollToTop}>{"</>"}</LogoSymbol>

        <NavLinks>
          {navItems.map((item) => (
            <LinkItem key={item.name} href={item.link}>
              {item.name}
            </LinkItem>
          ))}
        </NavLinks>

        {/* Div vazia para manter o LogoSymbol e NavLinks equilibrados no espaço entre eles */}
        <div style={{ width: "40px" }} />
      </DesktopContainer>

      {/* Mobile Version */}
      <MobileContainer>
        <div
          style={{
            display: "flex",
            justifyContent: scrolled ? "flex-end" : "space-between",
            alignItems: "center",
          }}
        >
          {!scrolled && <LogoSymbol onClick={scrollToTop}>{"</>"}</LogoSymbol>}
          <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
            {isOpen ? (
              <X color="white" size={28} />
            ) : (
              <Menu color="white" size={28} />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <LinkItem
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: "1.1rem", padding: "0.5rem 0" }}
                >
                  {item.name}
                </LinkItem>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </MobileContainer>
    </NavWrapper>
  );
}
