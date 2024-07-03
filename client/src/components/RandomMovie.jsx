import "../styles/randomMovie.css";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function RandomMovie({ randomMovie }) {
  return (
    <section
      className="cardRandom"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path}&language=fr-FR)`,
      }}
    >
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
  randomMovie: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default RandomMovie;
