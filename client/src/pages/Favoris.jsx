import { useFavorites } from "../contexts/FavoritesContext";

function Favoris() {
  const { favorite } = useFavorites();
  return (
       <div>
        <h1>Liste de mes favoris</h1>
        {favorite.map((favoris) => (
          <div key={favoris.title}>
            <h2> {favoris.title} </h2>
            <img  src={`https://image.tmdb.org/t/p/w500${favoris.backdrop_path}`} alt={favoris.title} />
          </div>
        ))
        }
       </div>
  );
}

export default Favoris;
