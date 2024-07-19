import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [listed, setListed] = useState([]);
  const watch = useMemo(() => ({ listed, setListed }), [listed, setListed]);

  return (
    <WatchlistContext.Provider value={watch}>
      {children}
    </WatchlistContext.Provider>
  );
}

WatchlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WatchlistProvider;
export const useWatchlist = () => useContext(WatchlistContext);
