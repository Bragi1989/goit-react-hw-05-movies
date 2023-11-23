import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../MovieDetails/MovieDetails.module.css'

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Api.getMovieDetails(movieId).then((data) => setMovieDetails(data));
  }, [movieId]);

  const goBackToHome = () => {
    navigate('/');
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.moviedetailsSection}>
      <button className={css.moviedetailsButton} onClick={goBackToHome}>Go back</button>
      <div className={css.moviedetailsList}>
         <img
              src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}` : 'https://placehold.it/200x300'}
              alt={movieDetails.title}
              />
        <div className={css.moviedetailsItem}>
          <h2>{movieDetails.title}</h2>
          <p className={css.moviedetailsPar}>{movieDetails.overview}</p>
        </div> 
      </div>
     

      <nav>
        <ul className={css.moviedetailsMenu}>
          <li className={css.moviedetailsList}>
            <Link className={css.moviedetailsLink} to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li className={css.moviedetailsList}>
            <Link className={css.moviedetailsLink} to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetails;