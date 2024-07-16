import { Link, useLoaderData } from "react-router-dom";

function MovieList() {
  const { trendingMovies } = useLoaderData();
  console.info(trendingMovies);
  return (
    <section className="movieList">
      <h1>Acteurs populaires</h1>
      <div className="moviesCard">
        {trendingMovies.map((movie) => (
          <div key={movie.id}>
            <h2 className="movieCard"> {movie.title}</h2>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}&language=fr-FR`}
                alt={movie.title}
                className="frontImg"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieList;
