import React from 'react';
import Feed from "../components/Body/Feed/Feed";
import Login from "../components/Layout/Header/Login";
import Layout from "../components/Layout/Layout";
import {createBrowserRouter} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: []
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/feed',
        element: <PrivateRoute><Feed/></PrivateRoute>, // Use PrivateRoute component
    }
]);

export default router;