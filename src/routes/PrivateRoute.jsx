import React, {ReactNode} from 'react';
import {  useEffect } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { auth } from "./firebase";
import { login,selectUser,logout } from "../features/userSlice";


const PrivateRoute = ({ children }) => {

    const { pathname } = useLocation();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return user ? (
        children
    ) : (
        <Navigate to={'/login'} state={{ from: pathname }} replace />
    );
};
export default PrivateRoute;