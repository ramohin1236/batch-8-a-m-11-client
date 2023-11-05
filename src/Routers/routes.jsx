import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Allblogs from "../Pages/Allblogs";
import Addblogs from "../Pages/Addblogs";
import Wishlist from "../Pages/Wishlist";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/allblogs",
            element: <Allblogs/>
        },
        {
            path:"/addblogs",
            element: <Addblogs/>
        },
        {
            path:"/wishlist",
            element: <Wishlist/>
        },
      ]
    },
  ]);
  