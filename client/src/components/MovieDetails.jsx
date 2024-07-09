import { useState } from "react";
import "../styles/moviedetails.css";
import { useLoaderData, Link } from "react-router-dom";

function MovieDetails() {
  const movieInfo = useLoaderData();
  console.info(movieInfo);

  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const releaseYear = () => {
    const date = new Date(movieInfo.release_date);
    const year = date.getFullYear();
    return year;
  };

  const releaseDate = () => {
    const event = new Date(movieInfo.release_date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return event.toLocaleDateString("fr-FR", options);
  };

  const runTime = () => {
    const hours = Math.floor(movieInfo.runtime / 60);
    const minutes = movieInfo.runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  return (
    <>
      <div
        className="movieCard"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}&language=fr-FR)`,
        }}
      >
        <h1>{movieInfo.title}</h1>
        <ul className="movieCardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}&language=fr-FR`}
            alt=""
            className="frontImg"
          />
          <div className="movieCardList">
            <li>{movieInfo.original_title}</li>
            <li>
              {releaseYear()} | {runTime()}
            </li>
            <li>
              <ul>
                {movieInfo.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </li>
            <div className="ratingAndFavorite">
              <li>⭐{movieInfo.vote_average.toFixed(1)}</li>
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
            <span> {releaseDate()}</span>
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
        <p>{movieInfo.overview}</p>
      </div>
      <button className="blue-Font fullDetails" type="button">
        <Link to="/sheet"> Fiche technique</Link>
      </button>
    </>
  );
}

export default MovieDetails;
