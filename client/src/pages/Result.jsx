import { useLoaderData } from "react-router-dom";

import { useState } from "react";

import MovieResult from "../components/MovieResult";
import PersonResult from "../components/PersonResult";

import "../styles/result.css";

export default function Result() {
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
        <div>
          <p>Oops ! Aucun résultat</p>
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
