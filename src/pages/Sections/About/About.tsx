import { styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png.jpg";
import { Fade, Slide } from "react-awesome-reveal";

// --- Styled Components --- //
const StyledAbout = styled("section")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 2),
  color: theme.palette.common.white,
}));

const StyledImg = styled("img")(({ theme }) => ({
  borderRadius: "50%",
  width: "75%",
  height: "220px",
  objectFit: "cover",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("xs")]: {
    width: "280px",
    height: "280px",
    marginRight: theme.spacing(0),
    marginBottom: 0,
  },
}));

const StyledContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1100px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#0f172a71",
  marginTop: "4",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(4),
  },
}));

// --- Main Component --- //
const About = () => {
  return (
    <StyledAbout id="about-me">
      <Fade delay={400}>
        <Slide direction="up">
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            color="primary.contrastText"
            marginBottom="4"
          >
            About me
          </Typography>
        </Slide>
      </Fade>

      <StyledContentWrapper>
        <Slide direction="left">
          <StyledImg src={Avatar} alt="Avatar" />
        </Slide>

        <Slide direction="right">
          <Fade delay={500}>
            <StyledContainer>
              <Typography variant="body1">
                Olá, me chamo Jhon Herik tenho 19 anos. Minha jornada na
                programação teve início aos 13 anos, quando a curiosidade de
                saber o que vi em código de um "Hack / Script" de Minecraft
                despertou em mim o interesse de entender o que aquilo fazia.  
                <br />
                <br />
                Hoje estou trabalhando para ser um desenvolvedor Full-Stack,
                aplico dedicação para criar projetos robustos e funcionais, do
                front ao back-end. Meu objetivo é continuar evoluindo e
                contribuir para o mundo digital com projetos inovadores e de
                alta qualidade.
                <br />
                <br />
                <i>
                  "Sou só um vírus, querendo escapar, dos programadores da
                  vida." – Wesley D'Amico
                </i>
              </Typography>
            </StyledContainer>
          </Fade>
        </Slide>
      </StyledContentWrapper>
    </StyledAbout>
  );
};

export default About;
