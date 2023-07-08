import React from 'react';
import './MovieDetails.css';
import { useEffect, useState } from 'react';
import { getSingleMovie } from '../../apiCalls/apiCalls';

export const MovieDetails = ({id, toHomepage}) => {

  const [currentMovie, setCurrentMovie] = useState(null)
  const [error, setError] = useState({isError:false, message: ''})

  useEffect(() => {
    getSingleMovie(id).then(data => {
      setCurrentMovie(data.movie)
    })
    .catch(err => setError({isError:true, message: err}))
  }, [])

  const renderMovieDetails = () => {
    return (
      <article className='movie-details'>
        <button onClick={toHomepage} className='back-btn'>Back</button>
        <div className='movie-backdrop-container'>
          <img className='movie-backdrop' src={currentMovie.backdrop_path}></img>
          <p className='movie-title'>{currentMovie.title}</p>
        </div>
        <div className='movie-details-container'>
          <div className='movie-stats-container'>
            <p>Rating: {currentMovie.average_rating.toFixed(2)}</p>
            <p>Release Date: {currentMovie.release_date}</p>
          </div>
          <div className='movie-summary-container'>
            <p>Summary: {currentMovie.overview}</p>
            <p>Revenue: {currentMovie.revenue}</p>
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
