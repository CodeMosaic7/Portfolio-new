import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const Main=()=>{
    return(
        <h1>
            <Hero/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Footer/>
        </h1>
    )
}

export default Main;