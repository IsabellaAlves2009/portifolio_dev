import { Fab, Fade } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState, useEffect } from "react";

const BackToTop = () => {
  {
    /* O botão inicia em modo false, ativa quando o usuário rolar a página para baixo mais de 300px */
  }
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setvisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /* função de scroll para o topo */
  }
  const scrollToTop = () => {
    const durantion = 500;
    const start = window.scrollY;
    const starTime = performance.now();

    const animate = (currentTime: number) => {
      const timeElapsed = currentTime - starTime;
      const progress = Math.min(timeElapsed / durantion, 1);
      window.scrollTo(0, start * (1 - progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <Fade in={visible}>
      <Fab
        onClick={scrollToTop}
        color={"secondary"}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        size="medium"
        aria-label="back to top"
      >
        <ArrowCircleUpIcon />
      </Fab>
    </Fade>
  );
};

export default BackToTop;
