import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import ErrorPage from "../Components/ErrorPage";
import About from "../Components/About";
import Career from "../Components/Career ";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayouts from "../layouts/AuthLayouts";
import NewsDetails from "../Pages/NewsDetails";
import PrivetProvider from "../Provider/PrivetProvider";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "career",
        Component: Career,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivetProvider>
        <NewsDetails></NewsDetails>
      </PrivetProvider>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  { path: "/*", Component: ErrorPage },
]);

export default router