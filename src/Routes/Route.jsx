import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Shop from "../pages/Shop/Shop";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/shop',
          element: <Shop/>
        }
      ]
    },
  ]);