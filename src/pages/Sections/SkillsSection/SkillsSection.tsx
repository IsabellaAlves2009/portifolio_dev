// src/components/SkillsSection.tsx
import { Fade, Slide } from "react-awesome-reveal";
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import htmlIcon from '../../../assets/images/HTML.svg';
import cssIcon from '../../../assets/images/CSS.svg';
import bootsIcon from '../../../assets/images/Bootstrap.svg'
import jsIcon from '../../../assets/images/JavaScript.svg';
import tsIcon from '../../../assets/images/TypeScript.svg';
import reactIcon from '../../../assets/images/React-dark.svg'
import viteIcon from '../../../assets/images/Vite-Dark.svg'
import pythonIcon from '../../../assets/images/Python-Dark.svg'
import dockerIcon from '../../../assets/images/Docker.svg'
import LinuxIcon from '../../../assets/images/Linux-Dark.svg'
import gitIcon from '../../../assets/images/Git.svg'
import githubIcon from '../../../assets/images/Github-Dark.svg'
import flaskIcon from '../../../assets/images/Flask-Dark.svg'
import tailwindIcon from '../../../assets/images/Tailwind.svg'
import nodejsIcon from '../../../assets/images/NodeJS-Dark.svg'

interface Skill {
  id: string;
  image: string;
  hoverText: string;
  clickText: string;
  expText: string;
}
// Skills icons
const skillsData: Skill[] = [
  { id : 'Html', image: htmlIcon, hoverText: 'HTML: Estrutura base de todas as páginas web.', clickText: 'O HTML foi a minha porta de entrada para o desenvolvimento front-end. Através dele, não só aprendi a estruturar páginas web, mas também a compreender conceitos essenciais como tags, protocolos de rede e a importância de uma base sólida para qualquer projeto.', expText: '2 anos e 5 meses.' },
  { id: 'Css', image: cssIcon, hoverText: 'CSS: Estilização de componentes web.', clickText: 'Com CSS, aprendi a transformar o visual de um projeto. Sem ele seu site simplesmente não ganha vida nem tampouco cor, estilo, interações básicas de imagens e outras coisas visuais. Aprendi técnicas avançadas como FlexBox e responsavidade com o MediaQueries, essa linguagem me permite criar designs que são não apenas bonitos, mas também funcionais e adaptáveis a qualquer tela!', expText: '2 anos e 5 meses.'},
  { id: 'Bootstrap', image: bootsIcon, hoverText: 'Bootstrap: Framework de CSS para desenvolvimento rápido.', clickText: 'Bootstrap foi a solução que encontrei para acelerar o desenvolvimento de projetos, garantindo designs responsivos de forma rápida e eficiente. Esse framework me permitiu focar na funcionalidade, sabendo que a parte visual já estaria bem estruturada, aprender a usar esse framework foi um grande passo durante meu aprendizado tornando assim mais fácil de saber a disponibilidade e usuabilidade de meu código.', expText:'1 ano e 2 meses.' },
  { id: 'Tailwind', image: tailwindIcon, hoverText: 'Tailwind: Framework de CSS para desenvolvimento web com flexibilidades para design.', clickText: 'O Tailwind tem uma certa flexibilidade quando se trata de deixar o visual mais bonito, mais otimizado e uma semântica simples de entender. Embora deixando seu código mais verboso, tendo um certo conhecimento de CSS me ajudou a entender melhor e a estruturar minhas paginas com Tailwind.', expText:'1 mês.'},
  { id: 'JavaScript', image: jsIcon, hoverText: 'JavaScript: Adiciona interatividade e dinamismo.', clickText: 'Comecei aprender o tão famoso JS pelo youtube, principios básicos e logo após me interessar tanto comprei um curso onde lá aprendi muita das coisas que aplico hoje. O JavaScript me abriu um mundo de possibilidades, permitindo que eu adicionasse lógica e interatividade às minhas aplicações. Com essa linguagem, explorei a manipulação do DOM, a criação de funcionalidades dinâmicas e a resolução de desafios de programação, tornando-se uma base essencial para a minha evolução.', expText: '2 anos.'},
  { id: 'NodeJs', image: nodejsIcon, hoverText: 'Nodejs o motor V8 do JavaScript', clickText: 'O Nodejs pode executar o JavaScript fora da web, trabalhando ao lado do servidor (SSR). Ainda com pouco experiência, procuro aprender mais e mais sobre Nodejs. Com o Nodejs tenho mais escalabilidades de consumir APIs e manter meu projeto conectado com o backend / base de dados.', expText:'+- 1 mes.'},
  { id: 'TypeScript', image: tsIcon, hoverText: 'TypeScript: Superconjunto de JS com tipagem estática.', clickText: 'O TypeScript é o JavaScript mais forte! Ele se tornou uma ferramenta indispensável para garantir a segurança e a escalabilidade dos meus projetos. Ao adicionar a tipagem estática, ele me ajuda a prever e corrigir erros, resultando em um código mais robusto, organizado e fácil de manter.', expText: '2 meses.'},
  { id: 'ReactJs', image: reactIcon, hoverText: 'ReactJS: Biblioteca para construir interfaces de usuário.', clickText: 'ReactJS é uma biblioteca JavaScript. Com ReactJS, aprendi a construir interfaces de usuário modernas e eficientes. A abordagem baseada em componentes me permite desenvolver aplicações de página única (SPAs) de forma modular, reutilizável e com alto desempenho, facilitando a criação de experiências interativas e complexas.', expText: '2 meses.'},
  { id: 'vite', image: viteIcon, hoverText: 'Vite: Ferramenta de build frontend.', clickText: 'Vite é a minha ferramenta de build de escolha para projetos front-end. Sua velocidade e otimização do ambiente de desenvolvimento me permitem ter um feedback instantâneo sobre as mudanças no código, tornando o processo de criação mais ágil e produtivo.', expText:'2 meses.' },
  { id: 'python', image: pythonIcon, hoverText: 'Python: Linguagem de programação versátil e poderosa.', clickText: 'Python é uma linguagem extremamente versátil que utilizo para diversas tarefas, desde a automação de scripts até o desenvolvimento de aplicações web. Sua sintaxe clara e a vasta quantidade de bibliotecas me permitem resolver problemas de forma eficiente em diferentes contextos. Python é uma linguagem bastante presente nos estudos / trabalhos de CyberSegurança que também é uma área que tenho interesse!', expText: '9 meses.'},
  { id: 'Flask', image: flaskIcon, hoverText: 'Flask: Microframework web em Python.', clickText: 'Flask é o microframework de Python que utilizo para criar aplicações web de forma rápida e descomplicada. Sua simplicidade me permite focar na lógica do negócio, sendo ideal para construir APIs e protótipos com um código limpo e minimalista.', expText: '3 meses.'},
  { id: 'docker', image: dockerIcon, hoverText: 'Docker: Plataforma para empacotar aplicações.', clickText: 'Docker é uma ferramenta essencial para garantir a consistência dos meus projetos em diferentes ambientes. Com a sua tecnologia de contêineres, posso empacotar minhas aplicações com todas as suas dependências, facilitando a implantação e a colaboração, eliminando problemas de compatibilidade. Comecei a aprender Docker porque vi que talvez mais para frente iria me ser útil, com o Docker me fez entender e resolver problemas como "Na minha máquina não funciona!"', expText:'4 meses.' },
  { id: 'Git', image: gitIcon, hoverText: 'Git: Sistema de controle de versão distribuído.', clickText: 'O Git é a minha principal ferramenta de controle de versão. Ele me permite rastrear mudanças no código, colaborar de forma eficiente em equipe e gerenciar o histórico de desenvolvimento dos meus projetos, garantindo que eu possa voltar a qualquer estado anterior do código. O Git é uma ferramenta que facilita muito o trabalho em equipe e o controle de projetos, é inegável que é uma das ferramentas obrigatórias para um programador que preze sua carreira.', expText:'1 ano e 5 meses.' },
  { id: 'Github', image: githubIcon, hoverText: 'Github: Plataforma de hospedagem de código.', clickText: 'Utilizo o GitHub como a minha plataforma central para hospedagem e colaboração de código. Ele não só facilita o compartilhamento dos meus projetos, mas também me permite contribuir para a comunidade open-source e organizar meu portfólio de forma profissional.', expText: '2 anos.'},
  { id: 'linux', image: LinuxIcon, hoverText: 'Linux: Sistema operacional de código aberto.', clickText: 'Utilizei o Linux por pouco tempo porém me apaixonei, A sua flexibilidade, linha de comando robusta e a vasta comunidade de desenvolvedores me proporcionam um ambiente de trabalho poderoso, adaptável, rápido e leve ideal para programar e gerenciar servidores, Aprendi principios básicos de terminal e algumas distribuições Linux.', expText:'6 meses.'}
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
  background: linear-gradient(to right, #000000, #2F0743);
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
    const [displayText, setDisplayText] = useState<string>("Passe o mouse ou clique em uma das habilidades para saber mais!");
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [displayExp, setDisplayExp] = useState<string> ('')
    
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
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);

        // Limpeza: remove os listeners e o timer quando o componente é desmontado
        return () => {
            stopAutoScroll();
            carousel.removeEventListener('mouseenter', stopAutoScroll);
            carousel.removeEventListener('mouseleave', startAutoScroll);
        };
    }, []);

    const handleMouseEnter = (text: string, exp: string) => {
        if (!isClicked) {
          setDisplayExp(exp || 'Tempo não informado.')
          setDisplayText(text);
        }
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
          setDisplayText("Passe o mouse ou clique em uma das habilidades para saber mais!");
          setDisplayExp('');
        }
    };

    const handleClick = (text: string, exp: string) => {
        setDisplayText(text);
        setDisplayExp(exp || 'Tempo não informado.')
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
          <StyledH1 id="skills">
            Linguagens & Ferramentas
          </StyledH1>
          </Slide>

          <ExperienceContainer>
          Experiência: {displayExp}
          </ExperienceContainer>

          <SkillsContainer>
            <VerticalCarouselContainer ref={carouselRef}>
              {loopSkillsData.map((skill, index) => (
                <ImageWrapper 
                key={`${skill.id}-${index}`}
                onMouseEnter={() => handleMouseEnter(skill.hoverText, skill.expText)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(skill.clickText, skill.expText)}
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