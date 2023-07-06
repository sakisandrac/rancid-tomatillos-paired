import './MoviePoster.css'


const MoviePoster = ({title, poster, id}) => {
    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <figure className='poster' onClick={() => handleClick(id)}>
            <img src={poster} alt={`${title} poster`}></img>
            <figurecaption>{title}</figurecaption>
        </figure>
    )
}

export default MoviePoster;