import { useLoaderData } from "react-router-dom";
import RandomMovie from "../components/RandomMovie";
import Carrousel from "../components/Carrousel";
import PopularMovies from "../components/PopularMovies";

function Home() {
  const { trending, popular } = useLoaderData();
  return (
    <>
      <RandomMovie />
      <Carrousel movies={trending} />
      <PopularMovies movies={popular} />
    </>
  );
}

export default Home;
