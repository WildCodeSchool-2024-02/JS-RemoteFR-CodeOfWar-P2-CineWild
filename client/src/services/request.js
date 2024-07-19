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

// API des acteurs pour récupérer par id

export function getActorsById(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
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

// API des films dans lesquels les acteurs ont joué, par ID

export function getMovieActorsById(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.cast)
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
export function getTrendingMovies() {
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

// APIs barre de recherche pour les films
export function getMoviesSearch(value) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

// APIs barre de recherche pour les personnes
export function getPersonsSearch(value) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/person?query=${value}&api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

// API films à l'affiche
export function getNowPlayingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
