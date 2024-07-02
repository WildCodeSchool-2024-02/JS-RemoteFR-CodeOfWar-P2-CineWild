import { useState } from "react";
import "../styles/moviedetails.css";
import PropTypes from "prop-types";

function MovieDetails({ movie }) {
  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const releaseYear = () => {
    const date = new Date(movie.release_date);
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <div
        className="movieCard"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path}&language=fr-FR)`,
        }}
      >
        <h1>{movie.title}</h1>
        <ul className="movieCardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}&language=fr-FR`}
            alt=""
            className="frontImg"
          />
          <div className="movieCardList">
            <li>{movie.original_title}</li>
            <li>{releaseYear()} | Durée ?</li>
            <li>
              <ul>
                {movie.genre_ids},{movie.genre_ids[1]},{movie.genre_ids[2]}
              </ul>
            </li>
            <div className="ratingAndFavorite">
              <li>⭐{movie.vote_average.toFixed(1)}</li>
              <button onClick={handleClickFavorite} type="button">
                {isFavorite ? "Remove ❤️" : "Add 🖤"}
              </button>
            </div>
          </div>
        </ul>
      </div>
      <div className="movieDescription">
        <ul>
          <li>
            <span className="blue-Font">Film de :</span>
            <span> Personne (2ème API)</span>
          </li>
          <li>
            <span className="blue-Font">En salle depuis :</span>
            <span> {movie.release_date}</span>
          </li>

          <li>
            <span className="blue-Font">Casting principal :</span>
            <span> Acteur 1, acteur 2 (2ème API)</span>
          </li>
          <li>
            <span className="blue-Font">Pays d'origine :</span>
            <span> Pays 1, Pays 2</span>
          </li>
        </ul>
      </div>
      <div className="synopsis">
        <h3 className="blue-Font">Synopsis</h3>
        <p>{movie.overview}</p>
      </div>
      <button className="blue-Font fullDetails" type="button">
        Fiche technique
      </button>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MovieDetails;
