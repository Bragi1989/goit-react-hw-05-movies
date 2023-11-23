import React, { useEffect, useState } from 'react';
import * as Api from '../../services/Api';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    Api.getMovieReviews(movieId).then((data) => setMovieReviews(data));
  }, [movieId]);

  return (
    <div>
      <h2>Movie Reviews</h2>
      {movieReviews && movieReviews.results && movieReviews.results.length > 0 ? (
        <ul>
          {movieReviews.results.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
}

export default Reviews;