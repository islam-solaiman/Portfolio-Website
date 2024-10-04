import React, { useState } from "react";
import "./Projects.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setIsActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const categ_item = item.category.filter((i) => {
        return i === buttonCategory;
      });
      return categ_item[0] === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setIsActive("all");
            setArr(myProjects);
          }}
          className={isActive === "all" ? "active" : ""}
        >
          All Projects
        </button>
        <button
          onClick={() => handleClick("HTML & CSS")}
          className={isActive === "HTML & CSS" ? "active" : ""}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleClick("JavaScript")}
          className={isActive === "JavaScript" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("React")}
          className={isActive === "React" ? "active" : ""}
        >
          React
        </button>
        <button
          onClick={() => handleClick("NodeJs & Express")}
          className={isActive === "NodeJs & Express" ? "active" : ""}
        >
          NodeJs & Express
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 30 }}
              key={item.imgPath}
              className="card">
                <img src={item.imgPath} alt={item.title} />
                <div style={{ width: "266px" }} className="box">
                  <h1 classname="title">{item.title}</h1>
                  <p className="sub-title">{item.summery}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <a href={item.github}>
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a className="link flex" href={item.link}>
                      <a href={item.link}>Link</a>
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
