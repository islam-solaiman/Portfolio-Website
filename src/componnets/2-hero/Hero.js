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
          Islam Solaiman, Software Engineer
        </motion.h3>
        <p className="sub-title">
          I'm islam Solaiman, i have diploma In Software Enigineering from Alx
          Afric
        </p>
        <div className="all-icons flex">
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-instagram"></div>
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
