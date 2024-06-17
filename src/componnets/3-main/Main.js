import React, { useState } from 'react'
import  './main.css'

export default function Main() {
  const  [isActive, setIsActive] = useState("all");

  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button onClick={()=>setIsActive("all")} className={isActive === "all"? "active" : ""}>All Projects</button>
        <button onClick={()=>setIsActive("option1")} className={isActive === "option1" ? "active" : ""}>HTML & CSS</button>
        <button onClick={()=>setIsActive("option2")} className={isActive === "option2" ? "active" : ""}>JavaScript</button>
        <button onClick={()=>setIsActive("option3")} className={isActive === "option3" ? "active" : ""}>React & MUI</button>
        <button onClick={()=>setIsActive("option4")} className={isActive === "option4" ? "active" : ""}>NodeJs & Express</button>
      </section>

      <section className='flex right-section'>

      {["a", "b", "c", 1, 2].map((item) => {
  return (
    <article className='card'>
    <img src='./1.jpg' alt=''/>
    <div style={{width:"266px"}} className='box'>
      <h1 classname='title'>
        My Gallery
      </h1>
      <p className='sub-title'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
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
