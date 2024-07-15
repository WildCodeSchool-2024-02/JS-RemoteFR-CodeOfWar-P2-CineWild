import { useLoaderData } from "react-router-dom";

import MovieResult from "../components/MovieResult";

// import MovieDetails from "../components/MovieDetails";

export default function Result() {
  const { searchMovies } = useLoaderData();
  console.info(searchMovies);

  // const pluralSingularResults = () =>
  //   searchMovies.length < 2 ? "RÉSULTAT" : "RÉSULTATS";

  return (
    <section>
      {searchMovies.map((movie) => (
        <MovieResult key={movie.id} movie={movie} />
      ))}

      {/* {searchMovies === null
        ? "Oops ! Aucun résultat"
        : pluralSingularResults()}
      {!searchMovies
        ? null
        : searchMovies.map((movie) => (
            <MovieDetails key={movie.idMovie} movie={movie} />
          ))} */}
    </section>
  );
}
