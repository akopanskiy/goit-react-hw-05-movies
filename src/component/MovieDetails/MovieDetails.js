import styles from './MovieDetails.module.css';
import defaultImg from '../../default.jpg';

export default function MovieDetails({
  poster_path,
  original_title,
  popularity,
  overview,
  genres,
  title,
  onClick,
}) {
  const getImage = url => `https://image.tmdb.org/t/p/w300${url}`;

  return (
    <>
      <button type="button" className={styles.button} onClick={onClick}>
        GoBack
      </button>

      <div className={styles.movieDetails}>
        <div className={styles.moviePoster}>
          <img
            src={poster_path ? getImage(poster_path) : defaultImg}
            alt={original_title}
          />
        </div>

        <div className={styles.movieDescription}>
          <h1 className={styles.movieTitle}>{title}</h1>
          <h3 className={styles.movieInformation}>
            Popularity:{' '}
            <span className={styles.movieInformationDescr}>{popularity}</span>
          </h3>
          <h3 className={styles.movieInformation}>
            Overview:{' '}
            <span className={styles.movieInformationDescr}>{overview}</span>
          </h3>
          <ul className={styles.genres}>
            <h3 className={styles.movieInformation}>Genres:</h3>
            {genres &&
              genres.map(({ id, name }) => (
                <li key={id}>
                  <span>{name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <hr className={styles.hrShadow}></hr>
    </>
  );
}
