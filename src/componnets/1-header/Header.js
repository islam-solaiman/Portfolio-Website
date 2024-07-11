import React, { useEffect, useState } from 'react'
import   './header.css'


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
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
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
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        }
      </header>
    </div>
  )
}
