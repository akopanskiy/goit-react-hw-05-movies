import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = 'c7c004f73883764e3275420e8a4c0503';

export const fetchHomePage = () => {
  return axios.get(`${URL}trending/movie/day?api_key=${KEY}`);
};
export const fetchMovieDetailsPage = movieId => {
  return axios.get(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
};
export const fetchMoviesPage = query => {
  return axios.get(`${URL}search/movie?api_key=${KEY}&query=${query}`);
};
export const fetchCast = movieId => {
  return axios.get(
    `${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
};
export const fetchReviews = movieId => {
  return axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
  );
};
