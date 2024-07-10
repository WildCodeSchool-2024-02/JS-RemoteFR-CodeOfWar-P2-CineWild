import { useState } from "react";
import "../styles/moviedetails.css";
import { useLoaderData } from "react-router-dom";

function MovieDetails() {
  const { moviePeople, movieDetails, movieCountries } = useLoaderData();
  const movieCasting = moviePeople.cast.slice(0, 4);

  function nativeName() {
    return movieDetails.origin_country.map((iso) => {
      const foundIndex = movieCountries.findIndex(
        (country) => country.iso_3166_1 === iso
      );
      return movieCountries[foundIndex].native_name;
    });
  }

  const filteredCrew = moviePeople.crew
    .filter((person) => person.department === "Directing")
    .slice(0, 3);

  const [isFavorite, setIsFavorite] = useState("");
  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const releaseYear = () => {
    const date = new Date(movieDetails.release_date);
    const year = date.getFullYear();
    return year;
  };

  const releaseDate = () => {
    const event = new Date(movieDetails.release_date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return event.toLocaleDateString("fr-FR", options);
  };

  const runTime = () => {
    const hours = Math.floor(movieDetails.runtime / 60);
    const minutes = movieDetails.runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  const cleanString = (arrayOfString) => {
    let string = arrayOfString.join("");
    if (string.endsWith(", ")) {
      string = string.slice(0, -2);
    }
    return string;
  };

  const renderCrew = filteredCrew.map((director) => `${director.name}, `);
  const renderCasting = movieCasting.map((cast) => `${cast.name}, `);

  return (
    <>
      <div
        className="movieCard"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}&language=fr-FR)`,
        }}
      >
        <h1>{movieDetails.title}</h1>
        <ul className="movieCardContent">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}&language=fr-FR`}
            alt=""
            className="frontImg"
          />
          <div className="movieCardList">
            <li>{movieDetails.original_title}</li>
            <li>
              {releaseYear()} | {runTime()}
            </li>
            <li>
              <p>{movieDetails.genres.map((genre) => genre.name)}</p>
            </li>
            <div className="ratingAndFavorite">
              <li>⭐{movieDetails.vote_average.toFixed(1)}</li>
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
            <span className="blue-Font">Dirigés par : </span>
            <span>{cleanString(renderCrew)}</span>
          </li>
          <li>
            <span className="blue-Font">En salle depuis :</span>
            <span> {releaseDate()}</span>
          </li>

          <li>
            <span className="blue-Font">Casting principal : </span>
            <span className="casting">{cleanString(renderCasting)}</span>
          </li>
          <li>
            <span className="blue-Font">Pays d'origine : </span>
            <span>{nativeName()}</span>
          </li>
        </ul>
      </div>
      <div className="synopsis">
        <h3 className="blue-Font">Synopsis</h3>
        <p>{movieDetails.overview}</p>
      </div>
      <button className="blue-Font fullDetails" type="button">
        Fiche technique
      </button>
    </>
  );
}

export default MovieDetails;
