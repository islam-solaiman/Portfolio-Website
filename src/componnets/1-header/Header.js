import React, { useState } from 'react'
import   './header.css'


export default function Header() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <header className=' flex'>
        <button onClick={() => setShowModel(true)} className='menu'>Show model</button>
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

        <button>Light</button>
        {showModel && 
        <div className='fixed'>
          <ul className='model'>
            <li>close</li>
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
