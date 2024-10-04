import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer1.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spribg", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt="me"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Islam  Solaiman,
          <h6 style={{fontSize: "25px"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Full Stack Web Developer
        </h6>
        </motion.h3>

        <p className="sub-title">
          Software Engineering Program,  Alx Africa
        </p>
        <div className="all-icons flex">
          <a href="https://www.linkedin.com/in/islam-solaiman/"><div className="icon icon-linkedin-square"></div></a>
          <a href="https://github.com/islam-solaiman"><div className="icon icon-github"></div></a>
          <a href="https://www.instagram.com/islam_.solaiman/"><div className="icon icon-instagram"></div></a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
