import { styled, Typography } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";

// --- Styled Components --- //

const StyledAbout = styled("section")(({ theme }) => ({
  background: theme.palette.gradient?.dark || "#0d0d0d", 
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 2),
  color: theme.palette.common.white,
}));

const StyledContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  maxWidth: "1100px",
  width: "100%",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#1e293b71",
  width: "80%",
  padding: theme.spacing(2),
  marginLeft: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  flex: 1,
}));

// Grid para os Cards
const StatsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  maxWidth: "500px",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(3),
  flex: 1,
}));

// Estilização do Card Individual
const StatCard = styled("div")(({ theme }) => ({
  backgroundColor: "#1e293b71",
  padding: theme.spacing(4),
  borderRadius: "16px",
  textAlign: "left",
  width: "200px",
  minHeight: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.shadows[6],
  border: "1px solid #222",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: "#6809a7",
    boxShadow: "0px 10px 20px rgba(0, 163, 255, 0.1)",
  },
  "& h2": {
    color: "#6809a7",
    fontSize: "2.5rem",
    margin: 0,
  },
  "& p": {
    color: "#888",
    margin: theme.spacing(1, 0, 0, 0),
    fontSize: "1rem",
  },
}));

// --- Main Component --- //

const About = () => {
  return (
    <StyledAbout id="about-me">
      <Fade delay={400} triggerOnce>
        <Slide direction="up" triggerOnce>
          <Typography variant="h3" textAlign="left" gutterBottom marginBottom={6}>
            About me
          </Typography>
        </Slide>
      </Fade>

      <StyledContentWrapper>
        {/* Texto de Biografia */}
        <Slide direction="left" triggerOnce>
          <StyledContainer>
            <Typography variant="body1" lineHeight={1.8}>
                Olá, me chamo <strong>Jhon Herik</strong>, tenho 19 anos. Minha jornada na
                programação teve início aos 13 anos, quando a curiosidade de
                saber o que vi em código de um "Hack / Script" de Minecraft
                despertou em mim o interesse de entender o que aquilo fazia. 
              <br /><br />
               	Hoje estou trabalhando para ser um desenvolvedor <strong>Full-Stack</strong>,
                aplico dedicação para criar projetos robustos e funcionais, do
                front ao back-end. Meu objetivo é continuar evoluindo e
                contribuir para o mundo digital com projetos inovadores e de
                alta qualidade.
              <br /><br />
              <Typography component="i" variant="caption" color="gray">
                "Sou só um vírus, querendo escapar, dos programadores da vida." – Wesley D'Amico
              </Typography>
            </Typography>
          </StyledContainer>
        </Slide>

        {/* Dashboard de Estatísticas */}
        <Slide direction="right" triggerOnce>
          <StatsGrid>
            <StatCard>
              <h2>10+</h2>
              <p>Projetos</p>
            </StatCard>
            <StatCard>
              <h2>2+</h2>
              <p>Anos de experiência</p>
            </StatCard>
            <StatCard>
              <h2>5k+</h2>
              <p>Linhas de código</p>
            </StatCard>
            <StatCard>
              <h2 style={{ fontSize: "2.5rem" }}>∞</h2>
              <p>Café consumido</p>
            </StatCard>
          </StatsGrid>
        </Slide>
      </StyledContentWrapper>
    </StyledAbout>
  );
};

export default About;