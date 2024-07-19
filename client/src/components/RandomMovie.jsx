import "../styles/randomMovie.css";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { useFavorites } from "../contexts/FavoritesContext";
import { useWatchlist } from "../contexts/WatchlistContext";

function RandomMovie({ randomMovie }) {
  const { favorite, setFavorite } = useFavorites();
  const { listed, setListed } = useWatchlist();

  if (!Array.isArray(listed)) {
    return null;
  }

  const isWatchListed = listed.some(
    (watchMovie) => watchMovie.id === randomMovie.id
  );

  const addToWatchlist = () => {
    if (isWatchListed) {
      setListed((prevListed) =>
        prevListed.filter((watchMovie) => watchMovie.id !== randomMovie.id)
      );
    } else {
      setListed((prevListed) => [...prevListed, randomMovie]);
    }
  };

  if (!Array.isArray(favorite)) {
    return null;
  }

  const isFavorite = favorite.some(
    (favMovie) => favMovie.id === randomMovie.id
  );

  const addToFavorite = () => {
    if (isFavorite) {
      setFavorite((prevFavorites) =>
        prevFavorites.filter((favMovie) => favMovie.id !== randomMovie.id)
      );
    } else {
      setFavorite((prevFavorites) => [...prevFavorites, randomMovie]);
    }
  };

  return (
    <section className="cardRandom">
      <div
        className="background-random"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}&language=fr-FR)`,
        }}
      >
        <title>empty</title>
      </div>
      <div className="informationsMovie">
        <div className="poster">
          <img
            className="posterPicture"
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="titleMovie">
          <h1>{randomMovie.title}</h1>
          <ul>
            <li>
              ⭐
              {randomMovie.vote_average === 0.0
                ? " Non noté"
                : randomMovie.vote_average.toFixed(1)}
            </li>
            <li>
              <button type="button" onClick={addToFavorite}>
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </li>
            <li>
              <button type="button" onClick={addToWatchlist}>
                {isWatchListed ? "✔️" : "📌"}
              </button>
            </li>
          </ul>
          <Link to={`/movies/${randomMovie.id}`}>
            <button type="button" className="buttonSalmon">
              Voir la fiche
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

RandomMovie.propTypes = {
  randomMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default RandomMovie;
