import { useLoaderData } from "react-router-dom";
import RandomMovie from "../components/RandomMovie";
import Carrousel from "../components/Carrousel";
import PopularMovies from "../components/PopularMovies";

function Home() {
  const { trendingMovies, popularMovies, randomMovie } = useLoaderData();
  return (
    <>
      <RandomMovie randomMovie={randomMovie} />
      <Carrousel trendingMovies={trendingMovies} />
      <PopularMovies popularMovies={popularMovies} />
    </>
  );
}

export default Home;
