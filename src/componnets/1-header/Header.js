import React, { useState } from 'react'
import   './header.css'


export default function Header() {
  const [showModel, setShowModel] = useState(false);
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

        <button className='mode flex'>
          <span className='icon-moon-o'></span>
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
