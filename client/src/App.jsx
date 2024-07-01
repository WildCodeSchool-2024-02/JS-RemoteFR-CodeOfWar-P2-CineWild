import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>Boutons</footer>
    </>
  );
}

export default App;
