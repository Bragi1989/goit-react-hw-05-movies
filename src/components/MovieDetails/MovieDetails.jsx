import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../services/Api.jsx';

import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        const credits = await getMovieCredits(movieId);
        const movieReviews = await getMovieReviews(movieId);

        setMovieDetails(details);
        setCast(credits.cast);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>

      <h3>Cast</h3>
      <div className={styles.castList}>
        {cast.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>

      <h3>Reviews</h3>
      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;