import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
