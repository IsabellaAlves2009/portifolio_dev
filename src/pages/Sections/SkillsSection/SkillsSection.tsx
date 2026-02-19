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

/* ================= STYLES ================= */

const Section = styled.section`
  width: 100%;
  background: linear-gradient(to right, #000, #2f0743);
  padding: clamp(4rem, 8vw, 7rem) 0;
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
  margin-bottom: 3rem;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 3rem;
  align-items: center;
`;

const Carousel = styled.div`
  width: 120px;
  height: 380px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: hidden;
`;

const SkillButton = styled.button`
  width: 56px;
  height: 56px;

  @media (min-width: 640px) {
    width: 64px;
    height: 64px;
  }

  @media (min-width: 1024px) {
    width: 88px;
    height: 88px;
  }

  border-radius: 15px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);

  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: scale(1.15);
    border-color: #a855f7;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`;

const TextBox = styled.div`
  padding-left: 1.25rem;
  border-left: 3px solid #a855f7;
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
  max-width: 520px;
`;

const Experience = styled.p`
  margin-top: 0.75rem;
  color: #cbd5f5;
  font-size: 0.95rem;
  opacity: 0.9;
`;

/* ================= COMPONENT ================= */

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

    let animationId: number;
    const speed = 0.6;
    let isHovering = false;

    const animate = () => {
      if (!isHovering) {
        el.scrollTop += speed;
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", () => (isHovering = true));
    el.addEventListener("mouseleave", () => (isHovering = false));

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleActivate = (skill: Skill) => {
    setText(t(`skills.items.${skill.key}.hover`));
    setExp(t(`skills.items.${skill.key}.experience`) || "");
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