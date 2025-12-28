import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Cursor from "../components/Cursor";
import Chat from "../components/Chat";
import "../styles/base.css";
import "../styles/animations.css"
import "../styles/variable.css"


const Main=()=>{
    return(
        <>
        <Cursor/>
        <div className="main-container">
            {/* <Cursor/> */}
            <Header/>
            <Hero/>
            <Chat/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Education/>
            <Footer/>
        </div>
        </>
    )
}

export default Main;