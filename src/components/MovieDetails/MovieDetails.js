import React from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types';

export const MovieDetails = ({currentMovie, toHomepage}) => {

  return (
    <article className='movie-details'>
      <button onClick={toHomepage} className='back-btn'>Back</button>
      <div className='movie-backdrop-container'>
        <img className='movie-backdrop' src={currentMovie[0].backdrop_path}></img>
        <p className='movie-title'>{currentMovie[0].title}</p>
      </div>
      <div className='movie-details-container'>
        <p className='detail-text'>Rating: {currentMovie[0].average_rating.toFixed(2)}</p>
        <p className='detail-text'>Release Date: {currentMovie[0].release_date}</p>
      </div>
    </article>
  )
}

MovieDetails.propTypes = {
  currentMovie: PropTypes.arrayOf(PropTypes.object).isRequired,
  toHomepage: PropTypes.func.isRequired
}
