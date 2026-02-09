import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import siteCorinthians from "../../../assets/images/Proj_Corinthians_photo.png";
import aluraChat from "../../../assets/images/alura-chat_project.png";
import toDoList from "../../../assets/images/ToDo_list_project.png";
import Jafetech from "../../../assets/images/jafetech_proj.png";
import TiltedCard from "../../../components/TiltedCard/TiltedCard";
import ERP from "../../../assets/images/ERP.png";
import honeepay from "../../../assets/images/honeepay.png";
import JohnnyBarbershop from "../../../assets/images/JohnnyBarbershop.png";
import loginPage from "../../../assets/images/LoginPage.png";
import { useTranslation } from "react-i18next";

type ProjectRowProps = {
  imageSrc?: string;
  imageAlt?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  imageFirst?: boolean;
};

const ProjectRow: React.FC<ProjectRowProps> = ({
  imageSrc,
  imageAlt = "Foto do projeto",
  description,
  githubUrl,
  liveUrl,
  imageFirst = true,
}) => {
  const fonts = "helvetica neue";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rowStyle: React.CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 16 : 24,
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
    borderRadius: 18,
    padding: isMobile ? 16 : 20,
    width: "100%",
    maxWidth: 1120,
    height: "auto",
    margin: "0 auto",
    marginTop: 60,
  };

  const panelBase: React.CSSProperties = {
    flex: isMobile ? "1 1 100%" : "1 1 45%",
    minWidth: 280,
    background: "#0f172a71",
    borderBottom: "3px solid white",
    borderRadius: 24,
    color: "#ffffff",
    padding: isMobile ? 16 : 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts,
  };

  const imagePanel: React.CSSProperties = { ...panelBase, overflow: "hidden" };
  const textPanel: React.CSSProperties = {
    ...panelBase,
    fontSize: isMobile ? 16 : 20,
    fontWeight: 700,
    lineHeight: 1.4,
    textAlign: "center",
  };

  const placeholderText: React.CSSProperties = {
    fontSize: isMobile ? 18 : 28,
    fontWeight: 800,
    letterSpacing: 0.5,
  };

  const iconsBox: React.CSSProperties = {
    display: "flex",
    gap: 12,
    color: "#ffffff",
    opacity: 0.9,
    ...(isMobile
      ? {
          position: "relative",
          justifyContent: "center",
          bottom: "auto",
          marginTop: 12,
        }
      : imageFirst
        ? { position: "absolute", bottom: 20, right: 30 }
        : { position: "absolute", bottom: 20, left: 30 }),
  };

  const left = imageFirst ? "image" : "text";
  const right = imageFirst ? "text" : "image";

  const Panel = ({ kind }: { kind: "image" | "text" }) => {
    if (kind === "image") {
      return (
        <div style={imagePanel}>
          {imageSrc ? (
            <TiltedCard
              imageSrc={imageSrc}
              altText={imageAlt}
              containerHeight={isMobile ? "180px" : "200px"}
              containerWidth={isMobile ? "100%" : "400px"}
              imageHeight={isMobile ? "180px" : "200px"}
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          ) : (
            <span style={placeholderText}>FOTO PROJETO</span>
          )}
        </div>
      );
    }
    return (
      <div style={textPanel}>
        <span>{description || "Texto explicativo"}</span>
      </div>
    );
  };

  const HoverIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
  }) => {
    const [hover, setHover] = useState(false);

    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          boxShadow: "none",
          color: "white",
          textDecoration: "none",
          transform: hover ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </a>
    );
  };

  return (
    <div style={rowStyle}>
      <Panel kind={left as any} />
      <Panel kind={right as any} />
      <div style={iconsBox}>
        {githubUrl && (
          <HoverIcon href={githubUrl}>
            <GitHubIcon />
          </HoverIcon>
        )}
        {liveUrl && (
          <HoverIcon href={liveUrl}>
            <LinkIcon />
          </HoverIcon>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const { t } = useTranslation();
  {
  }
  const pageStyle: React.CSSProperties = {
    minHeight: "130em",
    height: "auto",
    background: "linear-gradient(to right, #000000, #2F0743)",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    fontFamily: "helvetica neue",
    maxWidth: "100%",
    overflow: "hidden",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "32px",
    marginBottom: -50,
    marginTop: "20%",
    opacity: 0.9,
    textAlign: "center",
    fontFamily: "helvetica neue",
  };

  {
    /* Cards & animações dos projetos */
  }
  return (
    <main style={pageStyle}>
      <Fade delay={400}>
        <div style={titleStyle} id="projects">
          {t("projects.title")}
        </div>
      </Fade>
      {/* Projeto 1 */}
      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst
          imageSrc={siteCorinthians}
          description={t("projects.project1.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/site-corinthians"
        />
      </Slide>
      {/* Projeto 2 */}
      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={aluraChat}
          description={t("projects.project2.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/Chat-bot-alura"
        />
      </Slide>
      {/* Projeto 3 */}
      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst
          imageSrc={toDoList}
          description={t("projects.project3.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/TO-DO-LIST"
        />
      </Slide>
      {/* Projeto 4 */}
      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={Jafetech}
          description={t("projects.project4.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/JAFETECH"
        />
      </Slide>
      {/* Projeto 5 */}
      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={loginPage}
          description={t("projects.project5.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/Login-Page"
        />
      </Slide>
      {/* Projeto 6 */}
      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={JohnnyBarbershop}
          description={t("projects.project6.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/jhonherikgc/Johnny-Barber-Shop"
        />
      </Slide>
      {/* Projeto 7 */}
      <Slide direction="right" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={ERP}
          description={t("projects.project7.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/Vexwe/ERP"
        />
      </Slide>
      {/* Projeto 8 */}
      <Slide direction="left" delay={400}>
        <ProjectRow
          imageFirst={false}
          imageSrc={honeepay}
          description={t("projects.project8.description")}
          githubUrl="https://github.com/jhonherikgc"
          liveUrl="https://github.com/esc-software/HoneePay"
        />
      </Slide>
      {/* Espaçador para afastar o footer no mobile */}
      <div style={{ height: "80px", flexShrink: 0 }} />
    </main>
  );
}
