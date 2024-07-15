import { useLoaderData } from "react-router-dom";

import MovieResult from "../components/MovieResult";

export default function Result() {
  const { searchMovies } = useLoaderData();
  console.info(searchMovies);

  const pluralSingularResults = () =>
    searchMovies.length < 2 ? "RÉSULTAT :" : "RÉSULTATS :";

  return (
    <section>
      {searchMovies.length === 0 ? (
        <p className="sentenceResult">Oops ! Aucun résultat</p>
      ) : (
        <p className="sentenceResult">{pluralSingularResults()}</p>
      )}
      {!searchMovies
        ? null
        : searchMovies.map((movie) => (
            <MovieResult key={movie.id} movie={movie} />
          ))}
    </section>
  );
}
