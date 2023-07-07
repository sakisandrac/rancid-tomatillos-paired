const getMovies = async () => {
    let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    let data = response.json()
    return data
}

export {getMovies};