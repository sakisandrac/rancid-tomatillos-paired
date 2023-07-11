import React from 'react';
import './MovieDetails.css';
import { useEffect, useState } from 'react';
import { getSingleMovie } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

export const MovieDetails = () => {
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
        <Link to="/"><button className='back-btn'>Back</button></Link>
        <div className='movie-backdrop-container'>
          <img className='movie-backdrop' src={currentMovie.backdrop_path}></img>
          <p className='movie-title'>{currentMovie.title}</p>
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

