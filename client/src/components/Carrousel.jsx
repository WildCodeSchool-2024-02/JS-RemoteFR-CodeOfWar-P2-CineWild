import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
  console.info(setMovies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div ref={sliderRef} className="keen-slider">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`keen-slider__slide number-slide${index}`}
        >
          {movie.title} <br />
          {movie.vote_average}
        </div>
      ))}
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
}

export default Carrousel;
