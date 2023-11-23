import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../services/Api';

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
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.photo}`}
              alt={`${actor.name} headshot`}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;