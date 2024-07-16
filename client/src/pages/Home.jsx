import { useLoaderData } from "react-router-dom";
import RandomMovie from "../components/RandomMovie";
import Carrousel from "../components/Carrousel";
import PopularMovies from "../components/PopularMovies";
import PlayingMovies from "../components/NowPlaying";

function Home() {
  const { trendingMovies, popularMovies, randomMovie, playingMovies } =
    useLoaderData();
  return (
    <>
      <RandomMovie randomMovie={randomMovie} />
      <Carrousel trendingMovies={trendingMovies} />
      <PopularMovies popularMovies={popularMovies} />
      <PlayingMovies playingMovies={playingMovies} />
    </>
  );
}

export default Home;
