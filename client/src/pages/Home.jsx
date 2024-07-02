import RandomMovie from "../components/RandomMovie";
import Carrousel from "../components/Carrousel";
import PopularMovies from "../components/PopularMovies";

function Home() {
  return (
    <>
      <RandomMovie />
      <Carrousel />
      <PopularMovies />
    </>
  );
}

export default Home;
