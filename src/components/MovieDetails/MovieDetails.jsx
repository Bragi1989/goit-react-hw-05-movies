import React, { useEffect, useState, lazy, Suspense, } from 'react';
import { Link, useParams, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../MovieDetails/MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    setSearchQuery(query || '');

    Api.getMovieDetails(movieId).then((data) => setMovieDetails(data));
  }, [movieId, location.search]);

  const goBack = () => {
    const fromSearch = location.state?.fromSearch;

    if (fromSearch) {
      navigate(`/movies?query=${encodeURIComponent(searchQuery)}`, {
        state: { fromSearch: true, searchQuery },
      });
    } else {
      const previousQuery = location.state?.searchQuery || searchQuery;
      navigate(`/movies?query=${encodeURIComponent(previousQuery)}`);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={css.moviedetailsSection}>
      <button className={css.moviedetailsButton} onClick={goBack}>
        Go back
      </button>
      <div className={css.moviedetailsList}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
              : 'https://placehold.it/200x300'
          }
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
            <Link className={css.moviedetailsLink} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li className={css.moviedetailsList}>
            <Link className={css.moviedetailsLink} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast movieId={movieId} />} />
          <Route path="reviews" element={<Reviews movieId={movieId} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetails;