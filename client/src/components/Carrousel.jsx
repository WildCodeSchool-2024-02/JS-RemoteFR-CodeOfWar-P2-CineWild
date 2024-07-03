import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/carrousel.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Carrousel({ movies }) {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

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
            {movie.vote_average.toFixed(1)}
          </div>
        ))}
      </div>
    </>
  );
}

Carrousel.propTypes = {
  movies: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Carrousel;
