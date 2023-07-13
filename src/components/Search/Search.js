import React from 'react'
import './Search.css'
import searchSymbol from './search-symbol.png'

const Search = () => {

  return (
    <div className='search-container'>
        <input placeholder='Search' />
        <button type='submit' className='search-btn'><img src={searchSymbol} alt='search icon'/></button>
    </div>
  )
}

export default Search