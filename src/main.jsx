import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/main";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Collection from "./components/Collection/Collection";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello</Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "collection",
        element: <Collection></Collection>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
