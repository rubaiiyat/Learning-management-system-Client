import { createBrowserRouter, useParams } from "react-router";
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
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetails";
import MyClass from "../Profile/MyClass";
import LearnClass from "../Profile/LearnClass";
import PrivateCourseRoute from "./PrivateRoutes/PrivateCourseRoute";

const LearnClassWrapper = () => {
  const { id } = useParams();

  return (
    <PrivateCourseRoute courseId={id}>
      <LearnClass />
    </PrivateCourseRoute>
  );
};

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
        path: "/my-classes",
        element: (
          <PrivateRoutes>
            <MyClass></MyClass>
          </PrivateRoutes>
        ),
      },
      {
        path: "/learn-class/:id/:title",
        element: (
          <PrivateRoutes>
            <LearnClassWrapper></LearnClassWrapper>
          </PrivateRoutes>
        ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id/:title",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/course/${params.id}`);
          const result = await res.json();
          return result;
        },
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
