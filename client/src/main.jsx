import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getCarrousel,
  getPopularMovies,
  getDetailsMovies,
  getActorDetails,
} from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => ({
          trending: await getCarrousel(),
          popular: await getPopularMovies(),
        }),
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
        loader: ({ params }) => getDetailsMovies(params.id),
      },
      {
        path: "/actor",
        element: <ActorDetails />,
        loader: () => getActorDetails(),
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
