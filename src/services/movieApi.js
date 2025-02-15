
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const getPopularMovies = () => {
  return axios.get(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=${page}`);
};

const getTopRatedMovies = () => {
  return axios.get(`${BASE_URL}top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
};

const getUpcomingMovies = () => {
  return axios.get(`${BASE_URL}upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
};

const getMovieDetails = (movie_id) => {
  return axios.get(`${BASE_URL}${movie_id}?api_key=${API_KEY}&language=en-US`);
};

const getMovieCredits = (movie_id) => {
  return axios.get(`${BASE_URL}${movie_id}/credits?api_key=${API_KEY}&language=en-US`);
};

const searchMovies = (query, page = 1) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
};

export {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieDetails,
  getMovieCredits,
  searchMovies
};
