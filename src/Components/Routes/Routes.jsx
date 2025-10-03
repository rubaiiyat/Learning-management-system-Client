import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Pages/Home";

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
        element: <div>My Classes</div>,
      },
      {
        path: "/courses",
        element: <div>Courses</div>,
      },
      {
        path: "/profile",
        element: <div>User Profile</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

export default Routes;
