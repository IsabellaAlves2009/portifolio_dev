import Navbar from "../../components/Navbar"
import Hero from "../Sections/Hero/Hero"
import About from "../Sections/About/About"
import SkillsSection from "../Sections/SkillsSection/SkillsSection"
import ProjectSection from "../Sections/Projects/ProjectSection"
import BackToTop from "../../components/BacktoTop/BackToTop"
import Timeline from "../../components/TimeLine/Timeline"
import Footer  from "../../components/Footer/Footer"

const Home = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <SkillsSection/>
    <Timeline/>
    <ProjectSection/>
    <BackToTop/>
    <Footer/>
    </>
  )
}

export default Home
