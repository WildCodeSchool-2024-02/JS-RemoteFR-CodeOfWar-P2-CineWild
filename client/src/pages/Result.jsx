import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieResult from "../components/MovieResult";
import PersonResult from "../components/PersonResult";
import noResult from "../assets/images/noResult.webp";
import "../styles/result.css";

export default function Result() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { searchMovies, searchPersons } = useLoaderData();

  const [selection, setSelection] = useState("buttonTout");

  const handleChangeSelection = (buttonName) => {
    setSelection(buttonName);
  };

  const resultNumber = () => {
    if (selection === "buttonTout")
      return searchMovies.length + searchPersons.length;
    if (selection === "buttonFilm") return searchMovies.length;
    if (selection === "buttonArtiste") return searchPersons.length;
    return 0;
  };

  const result = resultNumber();

  const pluralSingularResults = () =>
    result < 2 ? "RÉSULTAT :" : "RÉSULTATS :";

  return (
    <section>
      {result === 0 ? (
        <div className="noResult">
          <p>Oops ! Aucun résultat</p>
          <img src={noResult} alt="broken camera" className="noResult" />
        </div>
      ) : (
        <div className="sentenceResult">
          <p>{pluralSingularResults()}</p>
          <p>
            {`${result}
            ${pluralSingularResults().toLowerCase().slice(0, -2)}`}
          </p>
        </div>
      )}
      {searchMovies.length + searchPersons.length === 0 ? null : (
        <div className="separatorFilter">
          <ul>
            <li>
              <button
                type="button"
                className="buttonTout"
                onClick={() => handleChangeSelection("buttonTout")}
              >
                Tout
              </button>
            </li>
            <li>
              <button
                type="button"
                className="buttonFilm"
                onClick={() => handleChangeSelection("buttonFilm")}
              >
                Film
              </button>
            </li>
            <li>
              <button
                type="button"
                className="buttonArtiste"
                onClick={() => handleChangeSelection("buttonArtiste")}
              >
                Artiste
              </button>
            </li>
          </ul>
        </div>
      )}
      {selection === "buttonFilm" && (
        <div>
          {!searchMovies
            ? null
            : searchMovies.map((movie) => (
                <MovieResult key={movie.id} movie={movie} />
              ))}
        </div>
      )}
      {selection === "buttonArtiste" && (
        <div>
          {!searchPersons
            ? null
            : searchPersons.map((person) => (
                <PersonResult key={person.id} person={person} />
              ))}
        </div>
      )}
      {selection === "buttonTout" && (
        <div>
          {!searchMovies
            ? null
            : searchMovies.map((movie) => (
                <MovieResult key={movie.id} movie={movie} />
              ))}
          {!searchPersons
            ? null
            : searchPersons.map((person) => (
                <PersonResult key={person.id} person={person} />
              ))}
        </div>
      )}
    </section>
  );
}
