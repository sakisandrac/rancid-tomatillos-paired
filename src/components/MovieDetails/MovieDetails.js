import React from 'react';
import './MovieDetails.css';

export const MovieDetails = ({currentMovie, toHomepage}) => {
  console.log(currentMovie)

  return (
    <article className='movie-details'>
      <button onClick={toHomepage} className='back-btn'>Back</button>
      <div className='movie-backdrop-container'>
        <img className='movie-backdrop' src={currentMovie[0].backdrop_path}></img>
        <p className='movie-title'>{currentMovie[0].title}</p>
      </div>
      <div className='movie-details-container'>
        <p>Rating: {currentMovie[0].average_rating.toFixed(2)}</p>
        <p>Release Date: {currentMovie[0].release_date}</p>
      </div>
    </article>
  )
}
