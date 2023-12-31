import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../Cast/Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await Api.getMovieCredits(movieId);
        setCast(castData.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  useEffect(() => {
    const fetchActorPhotos = async () => {
      const actorsWithPhotos = await Promise.all(
        cast.map(async (actor) => {
          try {
            const actorDetails = await Api.getActorDetails(actor.id);
            return { ...actor, photo: actorDetails.profile_path };
          } catch (error) {
            console.error(`Error fetching details for actor ${actor.id}:`, error);
            return actor;
          }
        })
      );

      setCast(actorsWithPhotos);
    };

    if (cast.length > 0) {
      fetchActorPhotos();
    }
  }, [cast]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast.map((actor, index) => (
          <li className={css.castItem} key={`${actor.id}-${index}`}>
            {actor.photo && (
              <img
                className={css.castLink}
                alt={`${actor.name} headshot`}
                src={`https://image.tmdb.org/t/p/w200${actor.photo}`}
              />
            )}
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;