import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../scss/components/_nav.scss'

const Navbar = () => {
  return (
    <div className='nav'>
        <nav className='nav__list'>
            <section className='nav__item'>
                <NavLink className='nav__link' to={"/"}>Home</NavLink>
            </section>
            <section className='nav__item'>
                <NavLink className='nav__link' to={"/aboutUs"}>About</NavLink>
            </section>
            <section className='nav__item'>
                <NavLink className='nav__link' to={"/projects"}>Projects</NavLink>
            </section>
            <section className='nav__item'>
                <NavLink className='nav__link' to={"/contact"}>Contact</NavLink>
            </section>          
        </nav>
    </div>
    
  )
}

export default Navbar