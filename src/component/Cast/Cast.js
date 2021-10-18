import { useState, useEffect } from 'react';
import { fetchCast } from '../../services/moviesAPI';
import styles from './Cast.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../../default.jpg';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  useEffect(() => {
    if (cast !== []) {
      scrollWindow();
    }
  }, [cast]);

  const scrollWindow = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ul className={styles.cast}>
        {cast.map(({ profile_path, name, character, id }) => (
          <li key={id} className={styles.castItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt=""
              className={styles.imgHero}
            />
            <h4 className={styles.actorName}>{name}</h4>
            <p className={styles.actorHero}>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default Cast;
