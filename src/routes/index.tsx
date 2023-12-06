import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "@/pages/auth/login";
import ProtectedRoutes from "./protected-routes";
import Register from "@/pages/auth/register";
import Home from "@/pages/home";
import Comments from "@/pages/comments/comments";
export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/comments/:id", element: <Comments /> },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <div>404 page not found</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
