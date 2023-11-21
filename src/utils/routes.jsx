import React from 'react';
const Home = React.lazy(() => import('../components/Home/Home.jsx'));
const Movies = React.lazy(() => import('../components/Movies/Movies.jsx'));
const MovieDetails = React.lazy(() => import('../components/MovieDetails/MovieDetails.jsx'));
const Cast = React.lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = React.lazy(() => import('../components/Reviews/Reviews.jsx'));

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/movies', component: Movies, exact: true },
  { path: '/movies/:movieId', component: MovieDetails, exact: true },
  { path: '/movies/:movieId/cast', component: Cast, exact: true },
  { path: '/movies/:movieId/reviews', component: Reviews, exact: true },
];

export default routes;