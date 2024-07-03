import axios from "axios";

// Carrousel avec les trending movies
export function getCarrousel() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

// Carrousel avec les films populaires
export function getPopularMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
