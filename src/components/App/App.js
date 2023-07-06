import './App.css';
import Homepage from '../Homepage/Homepage';
import movieData from '../../mock-data/mock-movies';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies)

  return (
    <div className="App">
      <h1>Rancid Tomatillos</h1>
      <Homepage movies={movies}/>
    </div>
  );
}

export default App;