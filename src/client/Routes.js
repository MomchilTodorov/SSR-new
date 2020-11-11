import App from "./App";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";
import TvShowsPage from "./pages/TvShowsPage";
import NotFoundPage from "./pages/NotFoundPage";

//using spread operator for the components
//and loadData function(if available)
//because they are imported in object form now
export default [
  {
    ...App, //no path added to App, meaning it will always be displayed on screen
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...MovieListPage,
        path: "/movies",
        exact: true,
      },
      {
        ...TvShowsPage,
        path: "/tvshows",
        exact: true,
      },
      {
        ...NotFoundPage, //will be shown if react router can't match any of the defined routes
      },
    ],
  },
];
