import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterAccueil from "./components/FooterAccueil";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterAccueil />
    </>
  );
}

export default App;
