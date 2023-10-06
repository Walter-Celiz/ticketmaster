import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Error404 } from "../pages/Error404";
import { Profile } from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: "/detail/:eventId",
    element: <Detail />
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <div>My info</div>
      },
      {
        path: "liked-events",
        element: <div>Liked events</div>
      }
    ]
  }
]);

export const Routes = () => <RouterProvider router={router} />;
