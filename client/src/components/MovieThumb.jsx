import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import camera from "../assets/images/camera.jpg";

function MovieThumb({ tools }) {
  const { movie, index } = tools;
  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      key={movie.id}
      className={`keen-slider__slide number-slide${index}`}
      id="film"
    >
      <Link to={`/movies/${movie.id}`}>
        {movie.poster_path ? (
          <img
            className="posterCarrouselPicture"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img
            src={camera}
            alt={movie.title}
            className="posterCarrouselPicture"
          />
        )}
      </Link>
      {movie.title}{" "}
      <span className="vote-favorite">
        ⭐
        {movie.vote_average === 0.0
          ? "Non noté"
          : movie.vote_average.toFixed(1)}
        <button onClick={handleClickFavorite} type="button">
          {isFavorite ? "❤️" : "🖤"}
        </button>
      </span>
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
