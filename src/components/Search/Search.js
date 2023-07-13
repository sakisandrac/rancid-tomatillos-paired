import React from 'react'
import './Search.css'
import searchSymbol from './search-symbol.png'

const Search = () => {
  return (
    <div className='search-container'>
        <input placeholder='Search' />
        <button type='submit'><img src={searchSymbol}/></button>
    </div>
  )
}

export default Search