import './Homepage.css'
import MoviePoster from '../MoviePoster/MoviePoster';
import { useState } from 'react';

const Homepage = ({ movies }) => {

    const [movieDetails, setMovieDetails] = useState(false);

    const showMovieDetails = () => {
        setMovieDetails(prev => !prev)
        console.log(movieDetails)
    }

    const homePosters = movies.map(movie => {
        return (
            <MoviePoster title={movie.title} poster={movie.poster_path} id={movie.id}/>
        )
    })


   return (
    <main className='main-container'>
        <h1 className='main-header'>Rancid Tomatillos</h1>
        <div className='movies-container'>
        {homePosters}
        </div> 
    </main>
    )
}

export default Homepage;