import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/news",
    element: <h1>This is news.</h1>,
  },
  {
    path: "/auth",
    element: <h1>This is auth.</h1>,
  },
  {
    path: "*",
    element: <h1>This is error.</h1>,
  },
]);

export default router;
