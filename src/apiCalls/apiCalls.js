const getMovies = async () => {
    let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    if(!response.ok) {
        console.log(response.statusText)
        throw new Error(response.statusText)
    }
    let data = response.json()
    return data
}

const getSingleMovie = async (id) => {
    let response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    if(!response.ok) {
        console.log(response.statusText)
        throw new Error(response.statusText)
    }
    let data = response.json()
    return data
}

export {
    getMovies,
    getSingleMovie
};