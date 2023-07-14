import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import smallLogo from './small-logo.png';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ search, handleSearch, clearSearch }) => {

  return (
    <div className='nav-container'>
      <div className='nav-bar-topper'>
        <marquee><p className='marquee-text'>Explore Great Movies Today!</p></marquee>
      </div>
      <nav className='nav-bar'>
        <Link to="/"><img onClick={clearSearch} className='nav-logo' src={logo} alt='Rancid Tomatillos logo' /></Link>
        <Link to="/"><img onClick={clearSearch} className='nav-tiny-logo hidden' src={smallLogo} alt='Rancid Tomatillos logo'/></Link>
        <Search handleSearch={handleSearch} search={search}/>
      </nav>
    </div>
  )
}

export default NavBar

NavBar.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  clearSearch: PropTypes.func
}

