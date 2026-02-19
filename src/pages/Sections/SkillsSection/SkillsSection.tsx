// src/components/SkillsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
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
  key: string;
}

const skills: Skill[] = [
  { id: "HTML", image: htmlIcon, key: "html" },
  { id: "CSS", image: cssIcon, key: "css" },
  { id: "Bootstrap", image: bootsIcon, key: "bootstrap" },
  { id: "Tailwind", image: tailwindIcon, key: "tailwind" },
  { id: "JavaScript", image: jsIcon, key: "javascript" },
  { id: "Node.js", image: nodejsIcon, key: "nodejs" },
  { id: "TypeScript", image: tsIcon, key: "typescript" },
  { id: "React", image: reactIcon, key: "react" },
  { id: "Vite", image: viteIcon, key: "vite" },
  { id: "Python", image: pythonIcon, key: "python" },
  { id: "Flask", image: flaskIcon, key: "flask" },
  { id: "Docker", image: dockerIcon, key: "docker" },
  { id: "Git", image: gitIcon, key: "git" },
  { id: "GitHub", image: githubIcon, key: "github" },
  { id: "Linux", image: LinuxIcon, key: "linux" },
];

const loopSkills = [...skills, ...skills];


const Section = styled.section`
  width: 100%;
  background: linear-gradient(to right, #000, #2f0743);
  padding: clamp(4rem, 8vw, 7rem) 0;
  overflow-x: visible;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: clamp(1rem, 4vw, 2rem);
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2.5rem;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 420px;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const SkillButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: #0b0b0b;
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.25s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    border-radius: 14px;
  }
`;

const TextBox = styled.div`
  background: rgba(15, 23, 42, 0.45);
  border-radius: 18px;
  padding: 2rem;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  min-height: 180px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.4rem;
    min-height: 140px;
  }
`;

const Experience = styled.p`
  color: #cbd5f5;
  font-size: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState(
    t("skills.defaultText") ||
      "Passe o mouse ou toque em uma habilidade para saber mais.",
  );
  const [exp, setExp] = useState("");

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const speed = 0.5;
    let frame: number;

    const animate = () => {
      const mobile = window.innerWidth <= 768;

      if (mobile) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      } else {
        el.scrollTop += speed;
        if (el.scrollTop >= el.scrollHeight / 2) el.scrollTop = 0;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleActivate = (skill: Skill) => {
    setText(t(`skills.items.${skill.key}.hover`));
    setExp(
      t(`skills.items.${skill.key}.experience`) || "Tempo não informado",
    );
  };

  return (
    <Section id="skills">
      <Wrapper>
        <Fade>
          <Title>{t("skills.title")}</Title>
        </Fade>

        <Layout>
          <Carousel ref={carouselRef}>
            {loopSkills.map((skill, i) => (
              <SkillButton
                key={`${skill.id}-${i}`}
                onMouseEnter={() => handleActivate(skill)}
                onClick={() => handleActivate(skill)}
              >
                <img src={skill.image} alt={skill.id} />
              </SkillButton>
            ))}
          </Carousel>

          <div>
            <TextBox>{text}</TextBox>
            <Experience>
              {t("skills.experience")}: {exp}
            </Experience>
          </div>
        </Layout>
      </Wrapper>
    </Section>
  );
};

export default SkillsSection;
