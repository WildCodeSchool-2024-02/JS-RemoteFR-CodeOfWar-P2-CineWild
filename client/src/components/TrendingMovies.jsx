import axios from "axios";
import { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";

function TrendingMovies() {
  const [allTrendingMovies, setAllTrendingMovies] = useState([]);
  function FetchTrendingMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
      )
      .then((response) => {
        setAllTrendingMovies(response.data.results);
        console.info(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    FetchTrendingMovies();
  }, []);

  // > 0 non nécessaire
  return allTrendingMovies.length > 0
    ? allTrendingMovies.map((movie) => (
        <MovieDetails movie={movie} key={movie.id} />
      ))
    : null;
}

export default TrendingMovies;
