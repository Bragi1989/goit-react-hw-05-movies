import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../Movies/Movies.module.css'

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

      <ul className={css.movieList}>
        {searchResults.map((movie) => (
          <li className={css.movieItem} key={movie.id}>
            <Link className={css.movieLink} to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;