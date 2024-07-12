import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieThumb({ tools }) {
  const { movie, index } = tools;

  return (
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
  );
}

MovieThumb.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
}.isRequired;

export default MovieThumb;
