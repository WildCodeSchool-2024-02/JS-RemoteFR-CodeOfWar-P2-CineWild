import { useLoaderData } from "react-router-dom";

import MovieDetails from "../components/MovieDetails";

export default function Result() {
  const movies = useLoaderData();
  const pluralSingularResults = () =>
    movies.length < 2 ? "RÉSULTAT" : "RÉSULTATS";

  return (
    <section>
      {movies === null ? "Oops ! Aucun résultat" : pluralSingularResults()}
      {!movies
        ? null
        : movies.map((movie) => (
            <MovieDetails key={movie.idMovie} movie={movie} />
          ))}
    </section>
  );
}
