import React, { useState } from 'react';
import * as Api from '../../services/Api';
import css from '../Movies/Movies.module.css';
import MovieList from './MovieList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const results = await Api.searchMovies(searchQuery);
    setSearchResults(results.results);
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