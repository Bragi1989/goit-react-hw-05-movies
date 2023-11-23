import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link, useParams, Route, Routes, useNavigate } from 'react-router-dom';
import * as Api from '../../services/Api';

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
    <div>
      <button onClick={goBackToHome}>Go back</button>

      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />

      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
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