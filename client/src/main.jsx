import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getRandomMovies,
  getCarrousel,
  getPopularMovies,
  getDetailsMoviesById,
  getCastingById,
  getActorList,
  getCountriesList,
  getMoviesSearch,
  getActorsById,
  getMovieActorsById,
} from "./services/request";

import App from "./App";
import Home from "./pages/Home";

// import Movie from "./pages/Movie";
import Favoris from "./pages/Favoris";
import User from "./pages/User";
import Result from "./pages/Result";

import MovieDetails from "./pages/MovieDetails";
import ActorList from "./pages/ActorList";
import Sheet from "./pages/Sheet";
import ActorDetails from "./pages/ActorDetails";
import FavoritesProvider from "./contexts/FavoritesContext";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => ({
          randomMovie: await getRandomMovies(),
          trendingMovies: await getCarrousel(),
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
        path: "/actors/:id",
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
        path: "/user",
        element: <User />,
      },
      {
        path: "/result/movies/:query",
        element: <Result />,
        loader: async ({ params }) => ({
          searchMovies: await getMoviesSearch(params.query),
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
