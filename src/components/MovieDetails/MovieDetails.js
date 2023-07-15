import React from 'react';
import './MovieDetails.css';
import { useEffect, useState } from 'react';
import { getSingleMovie } from '../../apiCalls/apiCalls';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieDetails = ({ submitSearch, search, clearSearch }) => {
  const { id } = useParams()

  const [currentMovie, setCurrentMovie] = useState(null)
  const [error, setError] = useState({isError:false, message: ''})

  let dollarUSLocale = Intl.NumberFormat('en-US');

  useEffect(() => {
    getSingleMovie(id).then(data => {
      setCurrentMovie(data.movie)
    })
    .catch(err => setError({isError:true, message: err}))
  }, [])

  const movieGenres = (movie) => {
    return movie.genres.map(genre => (<p key={movie.id + movie.genres.indexOf(genre)} className='movie-genre'>{genre}</p>))
  }

  const renderMovieDetails = () => {
    return (
      <article className='movie-details'>
        <div className='back-btn-container'>
          <Link to="/"><button className='back-btn' onClick={clearSearch}>Back to Home</button></Link>
          {submitSearch && <Link to={`/search/${search}`}><button className='back-btn back-results'>Back to Search</button></Link>}
        </div>
        {error.isError && <p className='error'>{`Sorry! ${error.message}. Please try again later.`}</p>}
        <div className='movie-backdrop-container'>
          <img className='movie-backdrop' src={currentMovie.backdrop_path}></img>
          <h1 className='movie-title'>{currentMovie.title}</h1>
        </div>
        <div className='movie-genres-container'>
          {movieGenres(currentMovie)}
        </div>
        <div className='movie-details-container'>
          <div className='movie-stats-container'>
            <p><b>Release Date:</b> {currentMovie.release_date}</p>
            <p><b>Rating:</b> {currentMovie.average_rating}/10</p>
            <p><b>Runtime:</b> {currentMovie.runtime} mins</p>
            {currentMovie.budget > 0 && <p><b>Budget:</b> ${dollarUSLocale.format(currentMovie.budget)}</p>}
            {currentMovie.revenue > 0 && <p><b>Revenue:</b> ${dollarUSLocale.format(currentMovie.revenue)}</p>}
          </div>
          <div className='movie-summary-container'>
            <h2 className='tagline'>{currentMovie.tagline}</h2>
            <p className='summary'>{currentMovie.overview}</p>
          </div>
        </div>
      </article>
    )
  }

  return (
    <> 
    {currentMovie && renderMovieDetails()}
    {error.isError && <p className='error'>{`Sorry! ${error.message}. Please try again later.`}</p>}
    </>
  )
}

MovieDetails.propTypes = {
  search: PropTypes.string,
  clearSearch: PropTypes.func
}

