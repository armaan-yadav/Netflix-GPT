import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/body/Body";
import Browse from "./components/browse/Browse";
import LandingPage from "./components/landing page/LandingPage";
import "./index.css";
import Sign from "./components/authenication/Sign";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [],
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
