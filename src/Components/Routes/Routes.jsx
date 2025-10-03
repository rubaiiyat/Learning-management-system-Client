import { createBrowserRouter } from "react-router";
import App from "../../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);

export default Routes;
