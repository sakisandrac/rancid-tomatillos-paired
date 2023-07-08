import './MoviePoster.css';
import PropTypes from 'prop-types';

const MoviePoster = ({title, poster, id, showMovieDetails}) => {

    const handleClick = (e) => {
        showMovieDetails(e.target.id)
    }

    return (
        <figure className='poster'>
            <img id={id} onClick={(e) => handleClick(e)} src={poster} alt={`${title} poster`} ></img>
            <p className='movie-title-homepage'>{title}</p>
        </figure>
    )
}

export default MoviePoster;

MoviePoster.propTypes = { 
    title: PropTypes.string,
    poster: PropTypes.string,
    id: PropTypes.number,
    showMovieDetails: PropTypes.bool
}
