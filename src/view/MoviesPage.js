import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { fetchMoviesPage } from '../services/moviesAPI';
import SearchMovie from '../component/SearchMovie';
import styles from './Views.module.css';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const searchUrl = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (searchQuery !== '') {
      fetchMoviesPage(searchQuery)
        .then(response => setMovies(response.data.results))
        .catch(error => console.log(error.response.data));
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchUrl === '') {
      return;
    }
    setSearchQuery(searchUrl);
  }, [searchUrl]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };
  return (
    <>
      <SearchMovie onSubmit={onChangeQuery} />
      <ul className={styles.rounded}>
        {movies.map(({ id, title }) => (
          <li key={id} className={styles.items}>
            <Link
              to={{
                pathname: `${url}/${id}`,
                state: { from: { location } },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MoviesPage;
