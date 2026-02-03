// src/components/SkillsSection.tsx
import { Fade, Slide } from "react-awesome-reveal";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import htmlIcon from "../../../assets/images/HTML.svg";
import cssIcon from "../../../assets/images/CSS.svg";
import bootsIcon from "../../../assets/images/Bootstrap.svg";
import jsIcon from "../../../assets/images/JavaScript.svg";
import tsIcon from "../../../assets/images/TypeScript.svg";
import reactIcon from "../../../assets/images/React-dark.svg";
import viteIcon from "../../../assets/images/Vite-Dark.svg";
import pythonIcon from "../../../assets/images/Python-Dark.svg";
import dockerIcon from "../../../assets/images/Docker.svg";
import LinuxIcon from "../../../assets/images/Linux-Dark.svg";
import gitIcon from "../../../assets/images/Git.svg";
import githubIcon from "../../../assets/images/Github-Dark.svg";
import flaskIcon from "../../../assets/images/Flask-Dark.svg";
import tailwindIcon from "../../../assets/images/Tailwind.svg";
import nodejsIcon from "../../../assets/images/NodeJS-Dark.svg";

interface Skill {
  id: string;
  image: string;
  translationKey: string;
}

// Skills icons
const skillsData: Skill[] = [
  { id: "Html", image: htmlIcon, translationKey: "html" },
  { id: "Css", image: cssIcon, translationKey: "css" },
  { id: "Bootstrap", image: bootsIcon, translationKey: "bootstrap" },
  { id: "Tailwind", image: tailwindIcon, translationKey: "tailwind" },
  { id: "JavaScript", image: jsIcon, translationKey: "javascript" },
  { id: "NodeJs", image: nodejsIcon, translationKey: "nodejs" },
  { id: "TypeScript", image: tsIcon, translationKey: "typescript" },
  { id: "ReactJs", image: reactIcon, translationKey: "react" },
  { id: "vite", image: viteIcon, translationKey: "vite" },
  { id: "python", image: pythonIcon, translationKey: "python" },
  { id: "Flask", image: flaskIcon, translationKey: "flask" },
  { id: "docker", image: dockerIcon, translationKey: "docker" },
  { id: "Git", image: gitIcon, translationKey: "git" },
  { id: "Github", image: githubIcon, translationKey: "github" },
  { id: "linux", image: LinuxIcon, translationKey: "linux" },
];

const loopSkillsData = [...skillsData, ...skillsData];

// Styled H1
const StyledH1 = styled.h1`
  color: white;
  margin-top: 300px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 20px;
  }
`;

// Section container
const SkillsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right, #000000, #2f0743);
`;

// Skills container

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
`;

// Experience text container
const ExperienceContainer = styled.div`
  color: white;
  text-align: left;
  margin-left: -24rem;
  margin-bottom: -30px;
  font-family: Helvetica Neue;
  font-size: 20px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
    font-family: Helvetica Neue;
    font-size: 20px;
    margin-bottom: -50%;
  }
`;

//Carroussel Icons

const VerticalCarouselContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100px;
  margin-left: -50px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 90%;
    height: 120px;
  }
`;

//Animated icons

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
    widht: 50px;
    height: 50px;
    margin-top: 50px;
  }
`;

//Text habilidades container

const TextContainer = styled.div`
  width: 860px;
  height: 400px;
  padding: 20px;
  font-size: 30px;
  background-color: #0f172a71;
  margin-bottom: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  white-space: pre-wrap;
  color: white;

  @media (max-width: 768px) {
    margin-bottom: 50%; /* Remove a margem inferior excessiva */
    width: 70%;
    height: auto; /* Altura automática para se ajustar ao conteúdo */
    font-size: 16px;
  }
`;

// Logicas

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const defaultText =
    t("skills.defaultText") ||
    "Passe o mouse ou clique em uma das habilidades para saber mais!";
  const [displayText, setDisplayText] = useState<string>(defaultText);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [displayExp, setDisplayExp] = useState<string>("");

  const carouselRef = useRef<HTMLDivElement>(null);

  // Efeito para criar a rolagem automática
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Timer para rolagem automática definido
    let scrollInterval: ReturnType<typeof setInterval>;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
          const listWidth = carousel.scrollWidth / 2;
          // Se a rolagem chegar ao fim da primeira lista, volta pro topo
          if (carousel.scrollLeft >= listWidth) {
            carousel.scrollLeft -= listWidth;
          } else {
            carousel.scrollLeft += 1;
          }
        } else {
          const listHeight = carousel.scrollHeight / 2;
          if (carousel.scrollTop >= listHeight) {
            carousel.scrollTop -= listHeight;
          } else {
            carousel.scrollTop += 1;
          }
        }
      }, 30);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Inicia a rolagem automática
    startAutoScroll();

    // Pausa a rolagem no hover
    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);

    // Limpeza: remove os listeners e o timer quando o componente é desmontado
    return () => {
      stopAutoScroll();
      carousel.removeEventListener("mouseenter", stopAutoScroll);
      carousel.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  const handleMouseEnter = (skill: Skill) => {
    if (!isClicked) {
      const hoverText = t(`skills.items.${skill.translationKey}.hover`);
      const expText = t(`skills.items.${skill.translationKey}.experience`);
      setDisplayExp(expText || "Tempo não informado.");
      setDisplayText(hoverText);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setDisplayText(
        t("skills.defaultText") ||
          "Passe o mouse ou clique em uma das habilidades para saber mais!",
      );
      setDisplayExp("");
    }
  };

  const handleClick = (skill: Skill) => {
    const clickText = t(`skills.items.${skill.translationKey}.click`);
    const expText = t(`skills.items.${skill.translationKey}.experience`);
    setDisplayText(clickText);
    setDisplayExp(expText || "Tempo não informado.");
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 0);
  };
  // <main>
  return (
    <SkillsSectionWrapper>
      <Fade delay={400}>
        <Slide direction="up">
          <StyledH1 id="skills">{t("skills.title")}</StyledH1>
        </Slide>

        <ExperienceContainer>
          {t("skills.experience")}: {displayExp}
        </ExperienceContainer>

        <SkillsContainer>
          <VerticalCarouselContainer ref={carouselRef}>
            {loopSkillsData.map((skill, index) => (
              <ImageWrapper
                key={`${skill.id}-${index}`}
                onMouseEnter={() => handleMouseEnter(skill)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(skill)}
              >
                <img src={skill.image} alt={skill.id} />
              </ImageWrapper>
            ))}
          </VerticalCarouselContainer>
          <TextContainer>
            <p>{displayText}</p>
          </TextContainer>
        </SkillsContainer>
      </Fade>
    </SkillsSectionWrapper>
  );
};

export default SkillsSection;
