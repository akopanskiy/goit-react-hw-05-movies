import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Navigation from './component/Navigation';
import Spin from './component/Loader';

const HomePage = lazy(
  () => import('./view/HomePage') /* webpackChunkName: "home-page" */,
);
const MovieDetailsPage = lazy(
  () =>
    import(
      './view/MovieDetailsPage'
    ) /* webpackChunkName: "movie-details-page" */,
);
const MoviesPage = lazy(
  () => import('./view/MoviesPage') /* webpackChunkName: "movies-page" */,
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />;
        </Switch>
      </Suspense>
    </>
  );
}
