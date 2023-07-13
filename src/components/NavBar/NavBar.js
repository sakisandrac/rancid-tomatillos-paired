import React from 'react';
import './NavBar.css';
import logo from './logo.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ search, handleSearch }) => {

  return (
    <div className='nav-container'>
      <div className='nav-bar-topper'>
        <marquee><p className='marquee-text'>Explore Great Movies Today!</p></marquee>
      </div>
      <nav className='nav-bar'>
        <Link to="/"><img className='nav-logo' src={logo} alt='Rancid Tomatillos logo' /></Link>
        <div className='search-container'>
          <input className='search-input' type='text' onChange={(e) => { handleSearch(e) }} value={search} name="search" placeholder="Search Titles"></input>
          <Link to={`/search/${search}`}><button className='search-btn' >Search</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

NavBar.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func
}

