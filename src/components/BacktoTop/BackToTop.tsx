import { Fab, Fade} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useState, useEffect } from "react";

const BackToTop = () => {
    const [visible, setvisible] = useState (false);

    // Quando aparencer

    useEffect(()=> {
        const handleScroll = () => setvisible (window.scrollY > 300);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener ("scroll", handleScroll);
    }, [])
    
    // Scroll lento para o topo da pagina
    
    const scrollToTop = () => {
        const durantion = 500;
        const start = window.scrollY;
        const starTime = performance.now();
        
        const animate = (currentTime: number) => {
            const timeElapsed = currentTime - starTime;
            const progress = Math.min (timeElapsed /durantion, 1);
            window.scrollTo(0, start * (1 - progress));
            if (progress < 1) requestAnimationFrame (animate)
            };
        
        requestAnimationFrame (animate);
    };
    
    return (
        <Fade in={visible}>
        <Fab
        onClick={scrollToTop}
        color={"secondary"}
        sx= {{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
        }}
        size="medium"
        aria-label="back to top"
        >
            <ArrowCircleUpIcon/>
        </Fab>
    </Fade>
    );
};

export default BackToTop;