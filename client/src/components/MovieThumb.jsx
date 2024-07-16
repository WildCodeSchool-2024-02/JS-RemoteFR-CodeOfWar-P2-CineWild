import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function MovieThumb({ tools }) {
  const { movie, index, favorite, setFavorite} = tools;

  if (!Array.isArray(favorite)) {
    return null;
  }

  const isFavorite = favorite.some(favMovie => favMovie.id === movie.id);

  const addToFavorite = () => {
   if (isFavorite) {
      setFavorite(prevFavorites => prevFavorites.filter(favMovie => favMovie.id !== movie.id));
    } else {
      setFavorite(prevFavorites => [...prevFavorites, movie]);
    }
    
  };

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
      {movie.vote_average === 0.0 ? "Non noté" : movie.vote_average.toFixed(1)}
      <button type="button" onClick={addToFavorite}>{isFavorite ? '❤️': '🤍'}</button>
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
