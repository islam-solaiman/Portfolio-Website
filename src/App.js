
import Hero from "./componnets/2-hero/Hero";
import Header from "./componnets/1-header/Header";
import Main from "./componnets/3-main/Main";
import Contact from "./componnets/4-contact/Contact";
import Footer from "./componnets/5-footer/Footer";
import { useEffect, useState } from "react";


function App() {

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
    <div className="devider"/>
    <Main />
    <div className="devider"/>
    <Contact />
    <div className="devider"/>
    <Footer />

    <a href="#up"style={{opacity: showScrollBtn? 1 : 0 , transition: "3s"}}>
     <button className="icon-keyboard_arrow_up scroll2top"></button>
    </a>
  </div>
}

export default App;
