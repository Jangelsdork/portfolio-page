'use client';

import Link from 'next/link'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'




export default function Page() {
  return (
    <div>
      <div className='nav-bar'>
        <Link href="#home"  className='nav-item'>Home</Link>
        <Link href="#about"  className='nav-item'>About</Link>
        <Link href="#projects"  className='nav-item'>Projects</Link>
        <Link href="#contact"className='nav-item'>Contact</Link>
      </div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <div className='footer'>footer</div>

    
    </div>
  )
}
