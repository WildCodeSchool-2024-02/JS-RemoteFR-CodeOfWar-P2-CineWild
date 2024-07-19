import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import camera from "../assets/images/camera.jpg";

function MovieThumb({ tools }) {
  const { movie, index, favorite, setFavorite, listed, setListed } = tools;

  if (!Array.isArray(listed)) {
    return null;
  }

  const isWatchListed = listed.some((watchMovie) => watchMovie.id === movie.id);

  const addToWatchlist = () => {
    if (isWatchListed) {
      setListed((prevListed) =>
        prevListed.filter((watchMovie) => watchMovie.id !== movie.id)
      );
    } else {
      setListed((prevListed) => [...prevListed, movie]);
    }
  };

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
      <p className="thumbtitle">{movie.title}</p>

      <span className="vote-favorite">
        ⭐
        {movie.vote_average === 0.0
          ? "Non noté"
          : movie.vote_average.toFixed(1)}
        <button type="button" onClick={addToFavorite}>
          {isFavorite ? "❤️" : "🤍"}
        </button>
        <button
          type="button"
          className="watchlistbutton"
          onClick={addToWatchlist}
        >
          {isWatchListed ? "✔️" : "📌"}
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
