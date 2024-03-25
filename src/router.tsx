import App from "./App";
import Popular from "./Routes/Popular";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";
import NotFound from "./Components/NotFound";
import ErrorComponent from "./Components/ErrorComponent";
import { createBrowserRouter } from "react-router-dom";
import MovieDetail from "./Routes/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Popular />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "movies/:movieId",
          },
        ],
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "movies/:movieId",
            element: <MovieDetail />,
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "movies/:movieId",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
