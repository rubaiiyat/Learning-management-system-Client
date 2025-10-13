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
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import AdminRegister from "../Admin/AdminAuth/AdminRegister";
import AddCourse from "../Admin/AddCourse/AddCourse";
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetails";
import MyClass from "../Profile/MyClass";
import LearnClass from "../Profile/LearnClass";
import SubmitAssignment from "../Profile/SubmitAssignment";
import Wrapper from "./PrivateRoutes/Wrapper";
import AdminRoute from "./PrivateRoutes/AdminRoute";
import AssignmentMarks from "../Admin/AssignmentMarks/AssignmentMarks";
import Teachers from "../Pages/Techers";

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
        element: <Teachers></Teachers>,
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
          <Wrapper>
            <LearnClass></LearnClass>
          </Wrapper>
        ),
      },
      {
        path: "/submit-assignment/:id/:title",
        element: (
          <Wrapper>
            <SubmitAssignment></SubmitAssignment>
          </Wrapper>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://lms-server-henna.vercel.app/course/${params.id}`
          );
          const result = await res.json();
          return result;
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id/:title",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://lms-server-henna.vercel.app/course/${params.id}`
          );
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
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/register",
        element: (
          <AdminRoute>
            {" "}
            <AdminRegister></AdminRegister>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/add-course",
        element: (
          <AdminRoute>
            <AddCourse></AddCourse>
          </AdminRoute>
        ),
      },
      {
        path: "/assignment-marks",
        element: (
          <AdminRoute>
            <AssignmentMarks></AssignmentMarks>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Routes;
