import React, { useState } from 'react'
import  './main.css'


const myProjects = [{
  title: "HTML Project",
  category: ["HTML & CSS"],
  imgPath: "./1.jpg", 
  summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    title: "HTML And Javascript project",
    category: ["HTML & CSS", "JavaScript"],
    imgPath: "./1.jpg", 
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    title: "JavaScript project",
    category: ["JavaScript"],
    imgPath: "./1.jpg", 
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
  title: "React project",
  category: ["React"],
  imgPath: "./1.jpg", 
  summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    title: "NodeJs project",
    category: ["NodeJs & Express"],
    imgPath: "./1.jpg", 
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
];


export default function Main() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const  handleClick = (buttonCategory) => {
    setIsActive(buttonCategory); 
      const newArr = myProjects.filter((item) => {
        const categ_item = item.category.filter((i) => {
           
          return i === buttonCategory}
      )
        return categ_item[0] === buttonCategory
      })
      setArr(newArr);
    }

  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={()=>{setIsActive("all"); setArr(myProjects)}} className={isActive === "all"? "active" : ""}>All Projects</button>
        <button onClick={()=> handleClick("HTML & CSS")} 
          className={isActive === "HTML & CSS" ? "active" : ""}>HTML & CSS</button>
        <button onClick={()=> handleClick("JavaScript")} 
        className={isActive === "JavaScript" ? "JavaScript" : ""}>JavaScript</button>
        <button onClick={()=> handleClick("React")} className={isActive === "React" ? "active" : ""}>React</button>
        <button onClick={()=> handleClick("NodeJs & Express")} className={isActive === "NodeJs & Express" ? "active" : ""}>NodeJs & Express</button>
      </section>

      <section className='flex right-section'>

      {arr.map((item) => {
  return (
    <article className='card'>
    <img src={item.imgPath} alt={item.title}/>
    <div style={{width:"266px"}} className='box'>
      <h1 classname='title'>
        {item.title}
      </h1>
      <p className='sub-title'>
        {item.summery}
      </p>
      <div className='flex icons'>
        <div style={{gap: "11px"}} className='flex'>
          <div className='icon-link'></div>
          <div className='icon-github'></div>
        </div>
        <a className='link flex' href="#" >
          More
          <span style={{alignSelf: "end"}} className='icon-arrow_forward'></span>
        </a>
      </div>
    </div>
  </article> 
  )
})}
      </section>
    </main>
  )
}
