import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../Movies/Movies.module.css';
import MovieList from './MovieList';

const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryFromUrl = queryParams.get('query');

    if (queryFromUrl) {
      setSearchQuery(queryFromUrl);
      searchMovies(queryFromUrl);
    }
  }, [location.search]);

  const searchMovies = async (query) => {
    const results = await Api.searchMovies(query);
    setSearchResults(results.results);
  };

  const handleSearch = () => {
    searchMovies(searchQuery);
    navigate(`/movies?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className={css.movieMenu}>
      <h1>Search Movies</h1>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Movies;