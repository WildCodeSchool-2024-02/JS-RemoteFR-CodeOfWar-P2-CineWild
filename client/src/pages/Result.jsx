import { useLoaderData } from "react-router-dom";

import MovieResult from "../components/MovieResult";

// import MovieDetails from "../components/MovieDetails";

export default function Result() {
  const { searchMovies } = useLoaderData();
  console.info(searchMovies);

  // const pluralSingularResults = () =>
  //   searchMovies.length < 2 ? "RÉSULTAT" : "RÉSULTATS";
  // console.info("Pluriel :", pluralSingularResults);

  return (
    <section>
      <h1>{searchMovies[0].title}</h1>
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

// import { useLoaderData } from "react-router-dom";

// import RecipeCard from "../components/RecipeCard";

// export default function Result() {
//   const meals = useLoaderData();

//   const convertToPlurial = () => (meals.length < 2 ? "resultat" : "résultats");

//   return (
//     <section>
//       {meals === null
//         ? "Aucun résultat pour cette recette"
//         : `Il y a ${meals.length} ${convertToPlurial()}`}
//       {!meals
//         ? null
//         : meals.map((meal) => <RecipeCard key={meal.idMeal} recipe={meal} />)}
//     </section>
//   );
// }
