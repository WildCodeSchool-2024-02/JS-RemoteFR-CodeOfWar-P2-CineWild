import PropTypes from "prop-types";
import {createContext, useContext, useMemo, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider ({children}){

    const [favorite, setFavorite] = useState([])
    const fav = useMemo(() => ({favorite, setFavorite}), [favorite, setFavorite])

    return(
        <FavoritesContext.Provider value={fav} >
            {children}
        </FavoritesContext.Provider>
    );

}

FavoritesProvider.propTypes = {
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
      })
    ).isRequired,
}


export default FavoritesProvider;
export const useFavorites = () => useContext(FavoritesContext);
