import axios from "axios";

// API random movie
export function getRandomMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => {
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    })
    .catch((error) => console.error(error));
}

// API de la page film
export function getDetailsMoviesById(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

// API casting d'un film par son ID
export function getCastingById(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

// API list of countries ISO 3166-1
export function getCountriesList() {
  return axios
    .get(
      `https://api.themoviedb.org/3/configuration/countries?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

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

// API page acteur
export function getActorList() {
  return axios
    .get(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

// APIs barre de recherche
export function getMoviesSearch(value) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
