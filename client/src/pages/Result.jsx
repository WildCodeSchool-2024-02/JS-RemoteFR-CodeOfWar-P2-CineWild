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
        <p className="sentenceResult">{pluralSingularResults()}</p>
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
