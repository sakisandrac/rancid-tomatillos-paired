import React from 'react';
import './NavBar.css';
import logo from './logo.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-bar-topper'>
        <marquee><p className='marquee-text'>Explore Great Movies Today!</p></marquee>
      </div>
      <nav className='nav-bar'>
        <img className='nav-logo' src={logo} alt='Rancid Tomatillos logo'/>
      </nav>
    </div>
  )
}

export default NavBar