import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { yearDate } from "../utils/functions";
import genres from "../utils/genres";

import "../styles/movieResult.css";

export default function MovieResult({ movie }) {
  function genreName() {
    return movie.genre_ids
      .map((id) => {
        const foundIndex = genres.findIndex((genre) => genre.id === id);
        return genres[foundIndex].name;
      })
      .join(", ");
  }

  return (
    <div className="resultContent">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}&language=fr-FR`}
          alt={movie.title}
          className="resultSearchImg"
        />
      </Link>
      <ul>
        <li>{movie.title}</li>
        <li>{yearDate(movie.release_date)}</li>
        <li>{genreName()}</li>
      </ul>
    </div>
  );
}

MovieResult.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};
