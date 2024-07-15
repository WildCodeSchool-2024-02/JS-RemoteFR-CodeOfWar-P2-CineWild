import { useLoaderData } from "react-router-dom";

import MovieResult from "../components/MovieResult";
import PersonResult from "../components/PersonResult";

export default function Result() {
  const { searchMovies, searchPersons } = useLoaderData();

  const pluralSingularResults = () =>
    searchMovies.length + searchPersons.length < 2
      ? "RÉSULTAT :"
      : "RÉSULTATS :";

  return (
    <section>
      {searchMovies.length + searchPersons.length === 0 ? (
        <p>Oops ! Aucun résultat</p>
      ) : (
        <div className="sentenceResult">
          <p>{pluralSingularResults()}</p>
          <p>
            {`${searchMovies.length}
            ${pluralSingularResults().toLowerCase().slice(0, -2)}`}
          </p>
        </div>
      )}
      {searchMovies.length + searchPersons.length === 0 ? null : (
        <div className="separator">
          <ul>
            <li>
              <button type="button" className="buttonTout">
                Tout
              </button>
            </li>
            <li>
              <button type="button" className="buttonFilm">
                Film
              </button>
            </li>
            <li>
              <button type="button" className="buttonArtiste">
                Artiste
              </button>
            </li>
          </ul>
        </div>
      )}
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
    </section>
  );
}
