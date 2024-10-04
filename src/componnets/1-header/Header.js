import React, { useEffect, useState } from 'react'
import   './header.css'
import { HashLink as Link } from 'react-router-hash-link';


export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect (() => {

    if(theme === 'light') 
    {
      document.body.classList.remove('dark');
      document.body.classList.add('light') ;
    }
    else {
      document.body.classList.remove('light');
      document.body.classList.add('dark') ;
    }
  }, [theme])
  return (
    <div>
      <header className=' flex'>
        <button onClick={() => setShowModel(true)} className='menu icon-menu' />
        <div/>
        <nav>
          <ul className='flex'>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>

        <button className='mode flex' onClick={() => {
          // Send value to LS
          localStorage.setItem("currentMode", theme === 'dark' ? 'light' : 'dark');

          // Get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}>
          <span className= {theme === 'dark' ? 'icon-moon-o' : 'icon-sun'} ></span>
        </button>
        {showModel && 
        <div className='fixed'>
          <ul className='model'>
            <li className='icon-cancel' onClick={() => setShowModel(false)} />
            <li onClick={() => setShowModel(false)}><Link to="#about">About</Link></li>
            <li onClick={() => setShowModel(false)}><Link to="#projects">Projects</Link></li>
            <li onClick={() => setShowModel(false)}><Link to="#skills">Skills</Link></li>
            <li onClick={() => setShowModel(false)}><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        }
      </header>
    </div>
  )
}
