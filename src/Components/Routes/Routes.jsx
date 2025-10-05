import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Pages/Home";
import AboutEduport from "../Pages/AboutEduport";
import ErrorPage from "../Pages/ErrorPage";
import Contact from "../Pages/Contact";
import Register from "../Profile/Register";
import Login from "../Profile/Login";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoute from "./PrivateRoutes/PublicRoute";
import Dashboard from "../Profile/Dashboard";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teachers",
        element: <div>Our Teachers</div>,
      },
      {
        path: "/classes",
        element: (
          <PrivateRoutes>
            <div>My Classes</div>
          </PrivateRoutes>
        ),
      },
      {
        path: "/courses",
        element: <div>Courses</div>,
      },
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register></Register>
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login></Login>
          </PublicRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <AboutEduport></AboutEduport>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default Routes;
