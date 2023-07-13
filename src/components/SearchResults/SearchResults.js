import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import PropTypes from 'prop-types';
import './SearchResults.css'

const SearchResults = ({ movies, showMovieDetails, clearSearch }) => {
// console.log('movies', movies)
  const { terms } = useParams()
  // console.log(terms)

  const filteredMovies = () => {
    const searchedName = terms.toLowerCase();
    const searchedMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchedName);
    });

    return searchedMovies;
  }

  const searchedMovies = filteredMovies().map(movie => {
      return (
          <Link to={`/${movie.id}`} key={movie.id} ><MoviePoster title={movie.title} poster={movie.poster_path} id={movie.id} showMovieDetails={showMovieDetails}/></Link>
      )
  })
  
  return (
    <div>
      <div className='search-header-container'>
        <Link to="/"><button className='back-btn' onClick={clearSearch}>Back to Home</button></Link>
        <h2>Results for "{`${terms}`}"</h2>
        <hr></hr>
      </div>
      <div className='search-results-container'>
        {filteredMovies().length > 0 ? searchedMovies : <p className='error'>No movies were found, try searching again!</p>}
      </div>
    </div>
  )
}

export default SearchResults

SearchResults.propTypes = { 
  movies: PropTypes.arrayOf(PropTypes.shape({
      average_rating: PropTypes.number,
      backdrop_path: PropTypes.string,
      id: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string
  })),
  showMovieDetails: PropTypes.func,
  clearSearch: PropTypes.func
}