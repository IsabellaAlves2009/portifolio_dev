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

const skillsData: Skill[] = [
  { id: "Html", image: htmlIcon, translationKey: "html" },
  { id: "Css", image: cssIcon, translationKey: "css" },
  { id: "Bootstrap", image: bootsIcon, translationKey: "bootstrap" },
  { id: "Tailwind", image: tailwindIcon, translationKey: "tailwind" },
  { id: "JavaScript", image: jsIcon, translationKey: "javascript" },
  { id: "NodeJs", image: nodejsIcon, translationKey: "nodejs" },
  { id: "TypeScript", image: tsIcon, translationKey: "typescript" },
  { id: "ReactJs", image: reactIcon, translationKey: "react" },
  { id: "Vite", image: viteIcon, translationKey: "vite" },
  { id: "Python", image: pythonIcon, translationKey: "python" },
  { id: "Flask", image: flaskIcon, translationKey: "flask" },
  { id: "Docker", image: dockerIcon, translationKey: "docker" },
  { id: "Git", image: gitIcon, translationKey: "git" },
  { id: "Github", image: githubIcon, translationKey: "github" },
  { id: "Linux", image: LinuxIcon, translationKey: "linux" },
];

const loopSkillsData = [...skillsData, ...skillsData];

const StyledH1 = styled.h1`
  color: white;
  margin-top: 200px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

const SkillsSectionWrapper = styled.section`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #000000, #2f0743);
`;

const ExperienceContainer = styled.div`
  color: white;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const VerticalCarouselContainer = styled.div`
  width: 80px;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  flex-shrink: 0;
  cursor: pointer;
  scroll-snap-align: center;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    margin: 0 15px 0 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 860px;
  padding: 20px;
  background-color: #0f172a71;
  border-radius: 8px;
  color: white;
  font-size: 22px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const defaultText =
    t("skills.defaultText") ||
    "Passe o mouse ou clique em uma das habilidades para saber mais!";

  const [displayText, setDisplayText] = useState(defaultText);
  const [displayExp, setDisplayExp] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        carousel.scrollLeft =
          carousel.scrollLeft >= maxScroll ? 0 : carousel.scrollLeft + 1;
      } else {
        const maxScroll = carousel.scrollHeight - carousel.clientHeight;
        carousel.scrollTop =
          carousel.scrollTop >= maxScroll ? 0 : carousel.scrollTop + 1;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <SkillsSectionWrapper>
      <Fade>
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
                onMouseEnter={() => {
                  setDisplayText(
                    t(`skills.items.${skill.translationKey}.hover`),
                  );
                  setDisplayExp(
                    t(`skills.items.${skill.translationKey}.experience`) ||
                      "",
                  );
                }}
                onMouseLeave={() => {
                  setDisplayText(defaultText);
                  setDisplayExp("");
                }}
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
