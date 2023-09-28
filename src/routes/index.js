import React from 'react';
import Feed from "../components/Body/Feed/Feed";
import Login from "../components/Layout/Header/Login";
import Layout from "../components/Layout/Layout";
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:
       [
       

       ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/feed',element: <Feed/>,
    }
]);

export default router;