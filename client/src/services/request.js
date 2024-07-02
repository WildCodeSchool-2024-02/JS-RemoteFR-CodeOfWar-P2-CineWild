/* eslint-disable import/prefer-default-export */
import axios from "axios";

export function getPopularMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
