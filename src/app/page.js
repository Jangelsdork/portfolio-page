import styles from './page.module.css'
import Home from './Home'
import Link from 'next/link'
import About from './About'
import Projects from './Projects'

export default function Page() {
  return (
    <div>
      <div className='nav-bar'>
        <Link href="#home" scroll={false} className='nav-item'>Home</Link>
        <Link href="#about" scroll={false} className='nav-item'>About</Link>
        <Link href="#projects" scroll={false} className='nav-item'>Projects</Link>
        <Link href="#contact"className='nav-item'>Contact</Link>
      </div>
      <Home />
      <About />
      <Projects />
      <div className="projects"></div>
      <div className="contact"></div>

    
    </div>
  )
}
