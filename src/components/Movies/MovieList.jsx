import React from 'react';
import MovieItem from './MovieItem';
import css from '../Movies/Movies.module.css';

const MovieList = ({ movies }) => (
  <ul className={css.movieList}>
    {movies.length > 0 ? (
      movies.map((movie) => <MovieItem key={movie.id} {...movie} />)
    ) : (
      <p>No movies found.</p>
    )}
  </ul>
);

export default MovieList;