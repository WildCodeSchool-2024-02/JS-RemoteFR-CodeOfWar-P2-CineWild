import { Outlet } from "react-router-dom";
import TrendingMovies from "./components/TrendingMovies";

function App() {
  return (
    <>
      <main>
        <TrendingMovies />
        <Outlet />
      </main>
      <footer>Boutons</footer>
    </>
  );
}

export default App;
