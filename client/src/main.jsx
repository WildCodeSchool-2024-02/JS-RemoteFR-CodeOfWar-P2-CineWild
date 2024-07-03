import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getCarrousel, getPopularMovies } from "./services/request";

import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

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
        path: "/movie",
        element: <Movie />,
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
