import TrendingMovies from "./components/TrendingMovies";
import Carrousel from "./components/Carrousel";
import RandomMovie from "./components/RandomMovie";

function App() {
  return (
    <>
      <main>
        <TrendingMovies />
        <RandomMovie />
        <Carrousel />
      </main>
      <footer>Boutons</footer>
    </>
  );
}

export default App;
