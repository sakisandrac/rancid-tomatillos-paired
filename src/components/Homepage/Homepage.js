import './Homepage.css'
import MoviePoster from '../MoviePoster/MoviePoster';

const Homepage = ({ movies }) => {
    const homePosters = movies.map(movie => {
        return (
            <MoviePoster title={movie.title} poster={movie.poster_path} id={movie.id}/>
        )
    })

   return (
    <div className='movies-container'>
        {homePosters}
    </div> 
    )
}

export default Homepage;