import React from 'react';
import Feed from "../components/Body/Feed/Feed";
import Login from "../components/Layout/Header/Login";
import Layout from "../components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import { auth } from "../firebase"; // Import the auth module
// import PropTypes from 'prop-types'; // Import PropTypes

// const AuthenticatedRoute = ({element, path }) => {
//     if (path === '/login' ) {
//         if(!auth.currentUser){
//             alert('hi')
//             return element;
//         }
//     }
//     return <Navigate to="/" />;
// };

// AuthenticatedRoute.propTypes = {
//     element: PropTypes.element.isRequired,
//     path: PropTypes.string.isRequired,
// };

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
        path: '/feed',
        element: <PrivateRoute><Feed/></PrivateRoute>, // Use PrivateRoute component
    }
]);

// .map(route => ({
//     ...route,
//     element: <AuthenticatedRoute {...route} />
// })));

export default router;