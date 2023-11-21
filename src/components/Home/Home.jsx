import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../services/Api.jsx';

import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrending();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h2>Trending Movies</h2>
      <div className={styles.movieList}>
        {trendingMovies.map((movie) => (
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

export default Home;