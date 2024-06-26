import axios from "axios";

import { useState, useEffect } from "react";

function RandomMovie() {
  const [movie, setMovie] = useState([]);

  const axiosData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cba7267ad4f2c5f2f8db1fc63dbe4822"
      )
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * 20);
        setMovie(response.data.results[randomIndex]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <>
      <h1>Coucou c'est nous</h1>
      <p>{movie.original_title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="backdrop"
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
      />

      <button type="button"> Voir la fich </button>
    </>
  );
}

export default RandomMovie;
