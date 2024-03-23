import App from "./App";
import Popular from "./Routes/Popular";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";
import NotFound from "./Components/NotFound";
import ErrorComponent from "./Components/ErrorComponent";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Popular />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
