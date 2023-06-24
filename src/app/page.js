'use client';

import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'




export default function Page() {
  return (
    
    <div>
      <Head>
        <title>Mangelsdev</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
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
      <div className='footer'>
        <div> Website design by Jack Hespe Mangelsdorf</div>
        <Link className='footer-icon' href="https://www.linkedin.com/in/jack-mangelsdorf-77338ba1/"><Image src="/linkedin.png" alt="linkedin" width="48" height="48" /></Link>
        <Link className='footer-icon' href="https://github.com/Jangelsdork/"><Image src="/github.png" alt="linkedin" width="48" height="48" /></Link>

      </div>


    
    </div>
  )
}
