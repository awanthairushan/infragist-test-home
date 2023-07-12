import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";
export default function Routers() {
    const MainRoutes = {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <HomePage/>
            }
        ]
    };

    return useRoutes([MainRoutes])
}