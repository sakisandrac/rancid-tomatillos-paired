import React from 'react';
import './Search.css';
import searchSymbol from './search-symbol.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({submitSearchTerm, search, handleSearch}) => {

  const handleForm = (e) => {
    e.preventDefault()
    if (!search) return
  }

  const renderIcon = () => <button className='search-btn' type='submit'><img src={searchSymbol} alt='search icon'/></button>

  const renderLink = () => {
    return <Link to={`/search/${search}`}><button onClick={submitSearchTerm} className='search-btn' type='submit'><img src={searchSymbol} alt='search icon'/></button></Link>
  }

  return (
    <form className='search-container' onSubmit={handleForm}>
      <input onChange={(e) => { handleSearch(e) }} 
        value={search} 
        name="search" 
        placeholder="Search Titles" />
      {search ? renderLink() : renderIcon() }
    </form>
  )
}

export default Search

Search.propTypes = {
  submitSearchTerm: PropTypes.func,
  search: PropTypes.string,
  handleSearch: PropTypes.func
}

