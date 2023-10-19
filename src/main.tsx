import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import MainError from "./pages/MainError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <MainError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
