import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/Api.jsx';

import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <h2>Cast</h2>
      <div className={styles.castList}>
        {cast.map((actor) => (
          <div key={actor.id} className={styles.actorCard}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;