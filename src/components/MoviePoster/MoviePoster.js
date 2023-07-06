import './MoviePoster.css'


const MoviePoster = ({title, poster, id}) => {
    const handleClick = (id) => {
        alert('clicked: ', id)
    }

    return (
        <figure className='poster' onClick={() => handleClick(id)}>
            <img src={poster} alt={`${title} poster`}></img>
            <figurecaption>{title}</figurecaption>
        </figure>
    )
}

export default MoviePoster;