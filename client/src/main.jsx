import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getRandomMovies,
  getCarrousel,
  getPopularMovies,
  getDetailsMovies,
  getActorList,
} from "./services/request";

import App from "./App";
import Home from "./pages/Home";

// import Movie from "./pages/Movie";
import Favoris from "./pages/Favoris";
import User from "./pages/User";

import MovieDetails from "./components/MovieDetails";
import ActorList from "./components/ActorList";
import Sheet from "./components/Sheet";

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
        loader: ({ params }) => getDetailsMovies(params.id),
      },
      {
        path: "/movies/:id/sheet",
        element: <Sheet />,
        loader: ({ params }) => getDetailsMovies(params.id),
      },
      {
        path: "/actors",
        element: <ActorList />,
        loader: () => getActorList(),
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
