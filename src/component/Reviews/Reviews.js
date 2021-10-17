import { useState, useEffect } from 'react';
import { fetchReviews } from '../../services/moviesAPI';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(response => setReviews(response.data.results));
  }, [movieId]);

  return (
    <>
      <ul className={styles.reviews}>
        {reviews.length > 0
          ? reviews.map(({ id, author_details: { username }, content }) => (
              <li key={id}>
                <h4 className={styles.reviewsName}>{username}</h4>
                <p className={styles.reviewsDescr}>{content}</p>
              </li>
            ))
          : 'We don`t have any reviews for this movie'}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Reviews;
