import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { fetchHomePage } from '../services/moviesAPI';
import Title from '../component/Title';
import styles from './Views.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchHomePage().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <Title title={'Trending today'} />
      <ul className={styles.rounded}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={styles.items}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default HomePage;
