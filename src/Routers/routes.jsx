import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";

import Addblogs from "../Pages/Addblogs";
import Wishlist from "../Pages/Wishlist";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import PrivateRoute from "../Authentication/PrivateRoute";
import Profile from "../Pages/Profile";
import BookDetails from "../Pages/BookDetails";

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
            path:"/bookDetails/:id",
            element: <PrivateRoute><BookDetails/></PrivateRoute>,
            loader: ({params})=>fetch(`https://book-blog-server.vercel.app/getbook/${params.id}`)
        },
        {
            path:"/profile",
            element: <Profile/>
        },
        {
            path:"/addblogs",
            element: <PrivateRoute><Addblogs/></PrivateRoute>
        },
        {
            path:"/wishlist",
            element: <PrivateRoute><Wishlist/></PrivateRoute>
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
  