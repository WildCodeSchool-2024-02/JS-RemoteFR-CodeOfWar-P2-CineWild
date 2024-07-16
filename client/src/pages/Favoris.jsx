import { useLayoutEffect } from "react";

function Favoris() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return <h1>Bienvenue sur tes films favoris</h1>;
}

export default Favoris;
