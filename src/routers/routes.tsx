import { lazy } from "react";

import { useRoutes } from "react-router-dom";

import {
  HOME_ROUTE,
  LOG_IN,
  NOT_FOUND_ROUTE,
  REGISTER,
} from "../constants/routes";
import UnhandledException from "../pages/Home";
import Todo from "../pages/Home/Todo";
import IdentityLayout from "../pages/Identity";
import Login from "../pages/Identity/Login";
import Register from "../pages/Identity/Register";

// protected
const HomePage = lazy(() => import("../pages/Home"));

const NotFoundPage = lazy(() => import("../pages/NotFound"));

export const Routes = () =>
  useRoutes([
    {
      path: HOME_ROUTE,
      element: <HomePage />,
      errorElement: <UnhandledException />,
      children: [
        {
          element: <Todo />,
          index: true,
        },
      ],
    },

    {
      element: <IdentityLayout />,
      children: [
        {
          path: LOG_IN,
          element: <Login />,
          errorElement: <Login />,
        },
        {
          path: REGISTER,
          element: <Register />,
          errorElement: <Register />,
        },
      ],
    },
    {
      path: NOT_FOUND_ROUTE,
      element: <NotFoundPage />,
    },
  ]);
