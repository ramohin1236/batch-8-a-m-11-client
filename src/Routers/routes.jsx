import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Allblogs from "../Pages/Allblogs";
import Addblogs from "../Pages/Addblogs";
import Wishlist from "../Pages/Wishlist";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import PrivateRoute from "../Authentication/PrivateRoute";

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
            element: <PrivateRoute><Addblogs/></PrivateRoute>
        },
        {
            path:"/wishlist",
            element: <Wishlist/>
        },
      ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registration/>
    },
  ]);
  