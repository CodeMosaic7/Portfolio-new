import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Chat from "../components/Chat";
import "../styles/variable.css";
import "../styles/base.css";
const Main=()=>{
    return(
        <div>
            <Header/>
            <Hero/>
            <Chat/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Education/>
            <Footer/>
        </div>
    )
}

export default Main;