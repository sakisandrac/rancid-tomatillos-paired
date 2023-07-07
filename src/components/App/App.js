import './App.css';
import Homepage from '../Homepage/Homepage';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../../apiCalls/apiCalls.js'

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState({isError:false, message: ''})

  useEffect(() => {
    getMovies().then(data => {
      setError({isError:false, message: ''})
      setMovies(data.movies)
    })
    .catch(err => setError({isError:true, message: err}))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Homepage movies={movies} error={error}/>
    </div>
  );
}

export default App;