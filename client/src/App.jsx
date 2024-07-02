import TrendingMovies from "./components/TrendingMovies";
import Carrousel from "./components/Carrousel";
import RandomMovie from "./components/RandomMovie";
import PopularMovies from "./components/PopularMovies";

function App() {
  return (
    <>
      <main>
        <RandomMovie />

        <Carrousel />
        <PopularMovies />
        <TrendingMovies />
      </main>
      <footer>Boutons</footer>
    </>
  );
}

export default App;
