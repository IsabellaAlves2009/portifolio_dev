import { useCallback } from "react";
import cvFile from "../../../assets/images/jhon_castro.pdf";
import { Box, Container, Grid, Typography, styled } from "@mui/material";

import ScrollDown from "../../../components/KeyboardArrowDown/ArrowDown";
import Avatar from "../../../assets/images/avatar.png.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StyledButton from "../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import { Fade, Slide } from "react-awesome-reveal";
import TextType from "../../../components/Typing/TextType";

// Email constants
export const RECIPIENT_EMAIL = "jhonherik006@gmail.com";
export const EMAIL_SUBJECT = "Contato via Curriculo - Dúvidas - Projetos";
export const EMAIL_BODY = "Olá, como podemos criar juntos?";

// Styled Components
const StyledHero = styled("div")(({ theme }) => ({
  background: theme.palette.gradient.dark,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "25px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "75%",
  maxWidth: "400px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  [theme.breakpoints.up("md")]: {
    paddingLeft: "-100px",
    marginLeft: "-100px",
    width: "100%",
    marginTop: "-15px",
  },
}));

// Main Component
const Hero = () => {
  // LÓGICA DE EMAIL
  const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

  const handleDownloadCv = useCallback(() => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "jhon_castro.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* ... Foto ... */}
          <Grid>
            <Slide direction="left">
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="Avatar" />
                </Box>
              </Box>
            </Slide>
          </Grid>

          {/* Grid do Texto e Botões */}
          {/*@ts-ignore*/}
          <Grid item xs={12} md={6}>
            {/* Lógica de posicionamento de telas*/}
            <Box
              sx={{
                position: { md: "absolute" },
                top: { md: "50%" },
                maxWidth: { xs: "100%", md: "100%" },
                textAlign: "center",
                left: { md: "60%", xl: "55%" },
                transform: {
                  md: "translate(-50%, -50%)",
                  xl: "translate(-40%, -50%)",
                },
              }}
            >
              <Fade>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="center"
                  pb={{ xs: 2, md: 0 }}
                  sx={{
                    whiteSpace: { xs: "normal", md: "nowrap" },
                    fontSize: {
                      xs: "1.9rem",
                      sm: "3rem",
                      md: "3.5rem",
                      lg: "5rem",
                    },
                  }}
                  mb={{ md: -2 }}
                >
                  Jhon Herik Gomes de Castro
                </Typography>
              </Fade>
              <Fade delay={500}>
                <Typography
                  color="primary.contrastText"
                  variant="h2"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  <Box
                    component="span"
                    sx={{
                      marginLeft: "-10px",
                      fontSize: {
                        xs: "1.4rem",
                        sm: "2.2rem",
                        md: "2.5rem",
                        lg: "3.2rem",
                      },
                    }}
                  >
                    Eu sou&nbsp;
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      minWidth: {
                        xs: "180px",
                        sm: "400px",
                        md: "500px",
                        lg: "450px",
                      },
                      maxWidth: "90vw",
                      textAlign: "left",
                      lineHeight: 1.2,
                      verticalAlign: "bottom",
                      "& span": {
                        textShadow: "0 0 12px rgba(104, 9, 167, 0.6)",
                        fontSize: {
                          xs: "1.4rem",
                          sm: "2.2rem",
                          md: "2.5rem",
                          lg: "3.2rem",
                        },
                      },
                    }}
                  >
                    {/* Logica do typing text com arrays de frases */}

                    <TextType
                      textColors={["#6809a7ff"]}
                      as="span"
                      text={[
                        "um Eng. de Software em formação",
                        "Desenvolvedor Full Stack",
                        "um Entusiasta da Tecnologia",
                      ]}
                      typingSpeed={40}
                      deletingSpeed={30}
                    />
                  </Box>
                </Typography>
              </Fade>
            </Box>

            {/* Botões */}
            <Fade delay={1000}>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
                sx={{
                  position: { md: "absolute" },
                  bottom: { md: "30%", lg: "33%" },
                  maxWidth: "100%",
                  left: { md: "51%", xl: "46%" },
                  transform: {
                    md: "translate(-40%, 50%)",
                    xl: "translate(-15%, -45%)",
                  },
                }}
              >
                {/* Botão Download CV */}
                <Grid>
                  <StyledButton onClick={handleDownloadCv}>
                    <DownloadIcon />
                    <Typography>Baixar CV</Typography>
                  </StyledButton>
                </Grid>

                {/* Botão Contact me */}
                <Grid>
                  {/* @ts-expect-error Prop 'component' não tipada. */}
                  <StyledButton component="div">
                    <a
                      href={GMAIL_COMPOSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <MailOutlineIcon />
                      <Typography>Contato</Typography>
                    </a>
                  </StyledButton>
                </Grid>

                {/* Botão Linkedin*/}
                <Grid>
                  {/* @ts-expect-error Prop 'component' não tipada.*/}
                  <StyledButton component="div">
                    <a
                      href="https://www.linkedin.com/in/jhonherikgc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LinkedInIcon />
                      <Typography>Linkedin</Typography>
                    </a>
                  </StyledButton>
                </Grid>

                {/* Botão Github*/}
                <Grid>
                  {/* @ts-expect-error Prop 'component' não tipada. */}
                  <StyledButton component="div">
                    <a
                      href="https://github.com/jhonherikgc"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <GitHubIcon />
                      <Typography>Github</Typography>
                    </a>
                  </StyledButton>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </Container>
      <ScrollDown targetId="#about-me" />
    </StyledHero>
  );
};

export default Hero;
