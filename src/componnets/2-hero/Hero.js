import React from 'react'
import  './hero.css'

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section border'>
        <div className='parent-avatar'>
          <img src="./me.png" className="avatar" alt="me"/>
          <span className='icon-verified'></span>
        </div>
        <h3>Islam Solaiman, Software Enginer</h3>
        <p>Diploma In Software Enigineering from Alx Afric</p>
        <div>
          <span className='icon-linkedin-square'></span>
          <span className='icon-github'></span>
          <span className='icon-instagram'></span>
        </div>
      </div>
      <div className='right-section border'>
        aff
      </div>
    </section>
  )
}
