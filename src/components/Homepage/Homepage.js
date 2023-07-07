import './Homepage.css'
import MoviePoster from '../MoviePoster/MoviePoster';
import { useState } from 'react';
import { MovieDetails } from '../MovieDetails/MovieDetails';

const Homepage = ({ movies }) => {

    const [movieDetails, setMovieDetails] = useState(false);
    const [currentMovie, setCurrentMovie] = useState([])

    const showMovieDetails = (id) => {
        setMovieDetails(prev => !prev)
        setCurrentMovie(() => {
            return movies.filter(movie => movie.id === parseInt(id))
        })
    }

    const toHomepage = () => {
        setMovieDetails(false)
    }

    const homePosters = movies.map(movie => {
        return (
            <MoviePoster showMovieDetails={showMovieDetails} title={movie.title} poster={movie.poster_path} key={movie.id} id={movie.id}/>
        )
    })

   return (
    <main className='main-container'>
        <h1 className='main-header'>Rancid Tomatillos</h1>
        <div className='movies-container'>
        {!movieDetails && homePosters}
        </div>
        <div className='current-movie-container'>
        {movieDetails && <MovieDetails toHomepage={toHomepage} currentMovie={currentMovie} />}
        </div>
    </main>
    )
}

export default Homepage;