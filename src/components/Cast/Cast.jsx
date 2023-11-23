import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../Cast/Cast.module.css'

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

  const fetchActorPhotos = async () => {
    const actorsWithPhotos = await Promise.all(
      cast.map(async (actor) => {
        const actorDetails = await Api.getActorDetails(actor.id);
        return { ...actor, photo: actorDetails.profile_path };
      })
    );

    setCast(actorsWithPhotos);
  };

  useEffect(() => {
    if (cast.length > 0) {
      fetchActorPhotos();
    }
  }, [cast]);

  return (
    <div>
      <h2>Cast</h2>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li className={css.castItem} key={actor.id}>
            <img className={css.castLink}
              alt={`${actor.name} headshot`}
              src={`https://image.tmdb.org/t/p/w200${actor.photo}`}
              />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;