import React from 'react'
import  './main.css'

export default function Main() {
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>NodeJs & Express</button>
      </section>

      <section className='right-section'>

      {["a", "b", "c"].map((item) => {
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
