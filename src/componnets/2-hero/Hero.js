import React from 'react'
import  './hero.css'

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className='parent-avatar flex'>
          <img src="./me.png" className="avatar" alt="me"/>
          <div className='icon-verified'></div>
        </div>
        <h3 className='title'>Islam Solaiman,</h3>
        <h3 className='title'>Software Enginer</h3>
        <p className='sub-title'>Diploma In Software Enigineering from Alx Afric</p>
        <div className='all-icons flex'>
          <div className='icon icon-linkedin-square'></div>
          <div className='icon icon-github'></div>
          <div className='icon icon-instagram'></div>
        </div>
      </div>
      <div className='right-section border'>
        aff
      </div>
    </section>
  )
}
