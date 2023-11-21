import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../services/Api.jsx';

import styles from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        if (searchQuery) {
          const data = await searchMovies(searchQuery);
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    search();
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.moviesContainer}>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Enter a keyword"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className={styles.movieList}>
        {searchResults.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;