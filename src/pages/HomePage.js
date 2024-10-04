
import Hero from "../componnets/2-hero/Hero";
import Header from "../componnets/1-header/Header";
import About from "../componnets/3-about/About";
import Skills from "../componnets/4-skills/Skills";
import Main from "../componnets/5-projects/Projects";
import Contact from "../componnets/6-contact/Contact";
import Footer from "../componnets/7-footer/Footer";
import { useEffect, useState } from "react";


function HomePage() {
    useEffect(()=> {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 300) setShowScrollBtn(true);
        else setShowScrollBtn(false)
        }
    )
    }, [])

    const [showScrollBtn, setShowScrollBtn] = useState(false);
    return <div id="up" className="container">
    <Header />
    <div className="devider"/>
    <Hero />
    <div className="devider" id="about"/>
    <About />
    <div className="devider" id="skills"/>
    <Skills/>
    <div className="devider" id="projects"/>
    <Main />
    <div className="devider" id="contact"/>
    <Contact />
    <div className="devider"/>
    <Footer />

        <a href="#up"style={{opacity: showScrollBtn? 1 : 0 , transition: "3s"}}>
            <button className="icon-keyboard_arrow_up scroll2top"></button>
        </a>
    </div>
}

export default HomePage
