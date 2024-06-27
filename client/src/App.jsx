import axios from "axios";
import { useState, useEffect } from "react";
import MovieDetails from "./components/Moviedetails";

function App() {
  const [allTrendingMovies, setAllTrendingMovies] = useState([]);
  function FetchTrendingMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=7d69be1456b1669d67a9f811eab55eec&language=fr-FR"
      )
      .then((response) => {
        setAllTrendingMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    FetchTrendingMovies();
  }, []);

  return (
    <>
      <main>
        <MovieDetails allTrendingMovies={allTrendingMovies} />
      </main>
      <footer>Boutons</footer>
    </>
  );
}

export default App;
