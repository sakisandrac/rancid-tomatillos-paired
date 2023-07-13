import React from 'react'
import './Search.css'
import searchSymbol from './search-symbol.png'
import { Link } from 'react-router-dom'

const Search = ({search, handleSearch}) => {

  return (
    <div className='search-container'>
        <input onChange={(e) => { handleSearch(e) }} value={search} name="search" placeholder="Search Titles" />
        <Link to={`/search/${search}`}><button className='search-btn'><img src={searchSymbol} alt='search icon'/></button></Link>
    </div>
  )
}

export default Search