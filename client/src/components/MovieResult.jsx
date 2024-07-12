import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { yearDate } from "../utils/functions";

import "../styles/movieResult.css";

export default function MovieResult({ movie }) {
  return (
    <div className="resultContent">
      <Link to={`/movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}&language=fr-FR`}
          alt=""
          className="resultSearchImg"
        />
      </Link>
      <ul>
        <li>{movie.title}</li>
        <li>{yearDate(movie.release_date)}</li>
      </ul>
    </div>
  );
}

MovieResult.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
