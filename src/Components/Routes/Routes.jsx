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
import UpdateProfile from "../Profile/UpdateProfile";
import AdminLogin from "../Admin/AdminAuth/AdminLogin";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import AdminRegister from "../Admin/AdminAuth/AdminRegister";
import AddCourse from "../Admin/AddCourse/AddCourse";

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
        path: "/user/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
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

      // Admin Part
      {
        path: "/admin/login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/admin/register",
        element: <AdminRegister></AdminRegister>,
      },
      {
        path: "/admin/add-course",
        element: <AddCourse></AddCourse>,
      },
    ],
  },
]);

export default Routes;
