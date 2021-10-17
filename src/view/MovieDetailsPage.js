import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router';
import { fetchMovieDetailsPage } from '../services/moviesAPI';

import MovieDetails from '../component/MovieDetails';
import MovieNavigation from '../component/MovieNavigation';
import Spin from '../component/Loader';
import Title from '../component/Title';

const Cast = lazy(
  () => import('../component/Cast') /* webpackChunkName: "cast" */,
);
const Reviews = lazy(
  () => import('../component/Reviews') /* webpackChunkName: "reviews" */,
);

const MovieDetailsPage = () => {
  const [
    { poster_path, original_title, title, popularity, overview, genres },
    setMovie,
  ] = useState([]);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetailsPage(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
  };
  return (
    <>
      <MovieDetails
        poster_path={poster_path}
        original_title={original_title}
        title={title}
        popularity={popularity}
        overview={overview}
        genres={genres}
        onClick={onGoBack}
      />

      <Title title={'Additional information'} />
      <MovieNavigation url={url} />

      <Suspense fallback={<Spin />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
