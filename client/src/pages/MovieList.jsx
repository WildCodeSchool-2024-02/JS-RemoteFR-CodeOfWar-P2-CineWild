import { Link, useLoaderData } from "react-router-dom";
import "../styles/movieList.css";

function MovieList() {
  const { trendingMovies } = useLoaderData();

  return (
    <section className="list">
      <h1>Films</h1>
      <div className="movieList">
        {trendingMovies.map((movie) => (
          <div key={movie.id}>
            <div className="movieListCard">
              <h2> {movie.title}</h2>
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="movieListCardContent"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}&language=fr-FR`}
                  alt={movie.title}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieList;
