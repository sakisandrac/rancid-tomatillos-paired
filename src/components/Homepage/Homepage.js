import './Homepage.css'
import MoviePoster from '../MoviePoster/MoviePoster';
import { useState } from 'react';
import { MovieDetails } from '../MovieDetails/MovieDetails';

const Homepage = ({ movies, error }) => {

    const [movieDetails, setMovieDetails] = useState(false);

    const showMovieDetails = (id) => {
        setMovieDetails(id)
    }

    const toHomepage = () => {
        setMovieDetails(false)
    }

    const homePosters = movies.map(movie => {
        return (
            <MoviePoster title={movie.title} poster={movie.poster_path} key={movie.id} id={movie.id} showMovieDetails={showMovieDetails}/>
        )
    })

   return (
    <main className='main-container'>
        <h1 className='main-header'>Rancid Tomatillos</h1>
        {error.isError && <p className='error'>{`Sorry! ${error.message}. Please try again later.`}</p>}
        <div className='movies-container'>
        {!movieDetails && homePosters}
        </div>
        <div className='current-movie-container'>
        {movieDetails && <MovieDetails id={movieDetails} toHomepage={toHomepage} />}
        </div>
    </main>
    )
}

export default Homepage;