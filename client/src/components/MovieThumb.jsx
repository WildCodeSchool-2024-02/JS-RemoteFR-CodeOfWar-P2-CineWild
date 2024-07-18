import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import camera from "../assets/images/camera.jpg";

function MovieThumb({ tools }) {
  const { movie, index, favorite, setFavorite } = tools;

  if (!Array.isArray(favorite)) {
    return null;
  }

  const isFavorite = favorite.some((favMovie) => favMovie.id === movie.id);

  const addToFavorite = () => {
    if (isFavorite) {
      setFavorite((prevFavorites) =>
        prevFavorites.filter((favMovie) => favMovie.id !== movie.id)
      );
    } else {
      setFavorite((prevFavorites) => [...prevFavorites, movie]);
    }
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
      {movie.title}
      <span className="vote-favorite">
        ⭐
        {movie.vote_average === 0.0
          ? "Non noté"
          : movie.vote_average.toFixed(1)}
        <button type="button" onClick={addToFavorite}>
          {isFavorite ? "❤️" : "🤍"}
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
