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
    category: ["HTML & CSS", "javaScript"],
    imgPath: "./1.jpg", 
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
    title: "JavaScript project",
    category: ["javaScript"],
    imgPath: "./1.jpg", 
    summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
  {
  title: "React project",
  category: ["React & MUI"],
  imgPath: "./1.jpg", 
  summery: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
  },
];

export default function Main() {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={()=>setIsActive("all")} className={isActive === "all"? "active" : ""}>All Projects</button>
        <button onClick={()=>{setIsActive("option1"); 
          const newArr = myProjects.filter((item) => {
            const categ_item = item.category.filter((i) => {
            return i === "HTML & CSS"
          })
            return categ_item[0] === "HTML & CSS"
          })
          setArr(newArr)}} className={isActive === "option1" ? "active" : ""}>HTML & CSS</button>
        <button onClick={()=>{setIsActive("option2"); 
          const newArr = myProjects.filter((item) => {
            const categ_item = item.category.filter((i) => {
               
              return i === "javaScript"}
          )
            return categ_item[0] === "javaScript"
          })
          setArr(newArr)}} className={isActive === "option2" ? "active" : ""}>JavaScript</button>
        <button onClick={()=>{setIsActive("option3");const newArr = myProjects.filter((item) => {
            const categ_item = item.category.filter((i) => {
               
              return i === "React & MUI"}
          )
            return categ_item[0] === "React & MUI"
          })
          setArr(newArr)}} className={isActive === "option3" ? "active" : ""}>React & MUI</button>
        <button onClick={()=>{setIsActive("option4"); setArr()}} className={isActive === "option4" ? "active" : ""}>NodeJs & Express</button>
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
