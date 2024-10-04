import React from 'react'
import  './footer.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#contact">Contact</Link></li>
      </ul>
      <p>&copy; 2024 Islam Solaiman  all rights reserved</p>
    </footer>
  )
}
