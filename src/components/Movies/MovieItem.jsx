import React from 'react';
import { Link } from 'react-router-dom';
import css from '../Movies/Movies.module.css';

const MovieItem = ({ id, title, searchQuery }) => (
  <li className={css.movieItem} key={id}>
    <Link className={css.movieLink} to={`/movies/${id}`} state={{ from: 'movies', searchQuery }}>
      {title}
    </Link>
  </li>
);

export default MovieItem;