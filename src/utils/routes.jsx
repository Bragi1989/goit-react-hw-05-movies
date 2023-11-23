import React from 'react';
import Home from '../components/Home/Home.jsx';
import Movies from '../components/Movies/Movies.jsx';
import MovieDetails from '../components/MovieDetails/MovieDetails.jsx';
import Cast from '../components/Cast/Cast.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/movies', component: Movies, exact: true },
  { path: '/movies/:movieId', component: MovieDetails, exact: true },
  { path: '/movies/:movieId/cast', component: Cast, exact: true },
  { path: '/movies/:movieId/reviews', component: Reviews, exact: true },
  { path: '/goit-react-hw-05-movies', component: Home },
];

export default routes;