import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PopularMovies() {
  const [popularmovies, setPopularMovies] = useState([]);

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
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR`
      )
      .then((response) => {
        setPopularMovies(response.data.results);
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
      <h1>Populaires</h1>

      <div ref={sliderRef} className="keen-slider">
        {popularmovies.map((popularmovie, index) => (
          <div
            key={popularmovie.id}
            className={`keen-slider__slide number-slide${index}`}
            id="film"
          >
            <img
              className="posterCarrouselPicture"
              src={`https://image.tmdb.org/t/p/w500${popularmovie.poster_path}`}
              alt={popularmovie.title}
            />
            {popularmovie.title} <br />
            {popularmovie.vote_average}
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularMovies;
