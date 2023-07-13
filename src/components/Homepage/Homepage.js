import './Homepage.css'
import MoviePoster from '../MoviePoster/MoviePoster';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Homepage = ({ movies, error, movieDetails, toHomepage, showMovieDetails }) => {

    const homePosters = movies.map(movie => {
        return (
            <Link to={`/${movie.id}`} key={movie.id} ><MoviePoster title={movie.title} poster={movie.poster_path} id={movie.id} showMovieDetails={showMovieDetails}/></Link>
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

Homepage.propTypes = { 
    movies: PropTypes.arrayOf(PropTypes.shape({
        average_rating: PropTypes.number,
        backdrop_path: PropTypes.string,
        id: PropTypes.number,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        title: PropTypes.string
    })),
    error: PropTypes.shape({
        isError: PropTypes.bool,
        message: PropTypes.string
    }),
    movieDetails:PropTypes.number,
    toHomepage: PropTypes.func,
    showMovieDetails: PropTypes.func
}