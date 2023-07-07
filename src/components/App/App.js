import './App.css';
import Homepage from '../Homepage/Homepage';
// import movieData from '../../mock-data/mock-movies';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../../apiCalls/apiCalls.js'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies().then(data => setMovies(data.movies))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Homepage movies={movies}/>
    </div>
  );
}

export default App;