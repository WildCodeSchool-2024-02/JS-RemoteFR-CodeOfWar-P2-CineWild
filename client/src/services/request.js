import axios from "axios";

export default function getDetailsMovies(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
