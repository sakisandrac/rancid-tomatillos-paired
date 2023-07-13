import React from 'react';
import './NavBar.css';
import logo from './logo.png'
import smallLogo from './small-logo.png'
import Search from '../Search/Search';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-bar-topper'>
        <marquee><p className='marquee-text'>Explore Great Movies Today!</p></marquee>
      </div>
      <nav className='nav-bar'>
        <img className='nav-logo' src={logo} alt='Rancid Tomatillos logo'/>
        <img className='nav-tiny-logo hidden' src={smallLogo} alt='Rancid Tomatillos logo'/>
        <Search />
      </nav>
    </div>
  )
}

export default NavBar