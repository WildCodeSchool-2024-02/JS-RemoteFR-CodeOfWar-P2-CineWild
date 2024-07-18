import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import RandomMovie from "../components/RandomMovie";
import Carrousel from "../components/Carrousel";
import PopularMovies from "../components/PopularMovies";
import PlayingMovies from "../components/PlayingMovies";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
