import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Deteail";
import { Error404 } from "../pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
