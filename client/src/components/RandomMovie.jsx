import "../styles/randomMovie.css";
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
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axiosData();
  }, []);

  console.info("test test:", movie);

  return (
    <section
      className="cardRandom"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}
    >
      <div className="informationsMovie">
        <div className="poster">
          <img
            className="posterPicture"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="titleMovie">
          <h1>{movie.original_title}</h1>
          <button type="button" className="buttonSalmon">
            {" "}
            Voir la fiche{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default RandomMovie;
