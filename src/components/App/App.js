import './App.css';
import Homepage from '../Homepage/Homepage';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getMovies } from '../../apiCalls/apiCalls.js';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
import SearchResults from '../SearchResults/SearchResults';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({isError:false, message: ''});
  const [movieDetails, setMovieDetails] = useState(0);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const submitSearchTerm = () => {
    setSubmitSearch(true)
    console.log('set submit')
  }

  const clearSearch = () => {
    setSearch("")
    setSubmitSearch(false)
    
  }

  const showMovieDetails = (id) => {
    setMovieDetails(id)
  }

  const toHomepage = () => {
    setMovieDetails(null)
  }
  
  useEffect(() => {
    getMovies().then(data => {
      setError({isError:false, message: ''})
      setMovies(data.movies)
    })
    .catch(err => setError({isError:true, message: err}))
  }, [])

  return (
    <div className="App">
      <NavBar movies={movies} submitSearchTerm={submitSearchTerm} search={search} handleSearch={handleSearch} clearSearch={clearSearch}/>
      <Routes>
        <Route path="/" element={<Homepage clearSearch={clearSearch} movies={movies} error={error} movieDetais={movieDetails} toHomepage={toHomepage} showMovieDetails={showMovieDetails}/>} />
        <Route path="/:id" element={<MovieDetails submitSearch={submitSearch} search={search} clearSearch={clearSearch}/>} />
        <Route path="/search/:terms" element={<SearchResults movies={movies} showMovieDetails={showMovieDetails} clearSearch={clearSearch}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;