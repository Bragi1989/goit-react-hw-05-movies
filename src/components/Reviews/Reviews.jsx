import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/Api.jsx';

import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      <div className={styles.reviewsList}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;