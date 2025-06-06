import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const genreurl="https://api.themoviedb.org/3/discover/movie?"
const api_key = "6a0068e377969dc6f44479dc7cebe739"; // only once, not repeated

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};
const getMovieGenreById = (id) => {
  return axios.get(`${genreurl}api_key=${api_key}&with_genres=+${id}`);
};

export default {
  getTrendingVideos,
  getMovieGenreById
};
