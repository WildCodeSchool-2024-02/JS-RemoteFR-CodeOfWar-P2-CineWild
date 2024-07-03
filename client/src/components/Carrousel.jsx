import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Carrousel() {
  const [movies, setMovies] = useState([]);

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  const fetchData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Tendances</h1>

      <div ref={sliderRef} className="keen-slider">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`keen-slider__slide number-slide${index}`}
            id="film"
          >
            <Link to={`/movies/${movie.id}`}>
              <img
                className="posterCarrouselPicture"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            {movie.title} <br />
            {movie.vote_average}
          </div>
        ))}
      </div>
    </>
  );
}

export default Carrousel;
