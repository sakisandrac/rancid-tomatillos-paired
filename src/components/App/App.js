import './App.css';
import Homepage from '../Homepage/Homepage';
import movieData from '../../mock-data/mock-movies';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies)

  return (
    <div className="App">
      <NavBar />
      <Homepage movies={movies}/>
    </div>
  );
}

export default App;