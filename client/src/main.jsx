import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getRandomMovies,
  getTrendingMovies,
  getPopularMovies,
  getDetailsMoviesById,
  getCastingById,
  getActorList,
  getCountriesList,
  getMoviesSearch,
  getActorsById,
  getMovieActorsById,
  getPersonsSearch,
  getNowPlayingMovies,
} from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";
import User from "./pages/User";
import Result from "./pages/Result";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import ActorList from "./pages/ActorList";
import Sheet from "./pages/Sheet";
import ActorDetails from "./pages/ActorDetails";
import FavoritesProvider from "./contexts/FavoritesContext";
import WatchlistProvider from "./contexts/WatchlistContext";
import Watchlist from "./pages/Watchlist";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => ({
          randomMovie: await getRandomMovies(),
          trendingMovies: await getTrendingMovies(),
          popularMovies: await getPopularMovies(),
          playingMovies: await getNowPlayingMovies(),
        }),
      },
      {
        path: "/movies",
        element: <MovieList />,
        loader: async () => ({
          trendingMovies: await getTrendingMovies(),
          popularMovies: await getPopularMovies(),
        }),
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        loader: async ({ params }) => ({
          moviePeople: await getCastingById(params.id),
          movieDetails: await getDetailsMoviesById(params.id),
          movieCountries: await getCountriesList(),
        }),
      },
      {
        path: "/movies/:id/sheet",
        element: <Sheet />,
        loader: async ({ params }) => ({
          moviePeople: await getCastingById(params.id),
          movieDetails: await getDetailsMoviesById(params.id),
          movieCountries: await getCountriesList(),
        }),
      },

      {
        path: "/actors",
        element: <ActorList />,
        loader: () => getActorList(),
      },
      {
        path: "/person/:id",
        element: <ActorDetails />,
        loader: async ({ params }) => ({
          actorDetails: await getActorsById(params.id),
          actorMovies: await getMovieActorsById(params.id),
        }),
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/result/movies_or_actors/:query",
        element: <Result />,
        loader: async ({ params }) => ({
          searchMovies: await getMoviesSearch(params.query),
          searchPersons: await getPersonsSearch(params.query),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WatchlistProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </WatchlistProvider>
  </React.StrictMode>
);
