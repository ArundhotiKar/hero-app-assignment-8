import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import Appdetails from '../Pages/AppDetails/Appdetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('JsonData.json'),
            path:"/",
            Component:Home
        },
        {
          index:true,
          loader:()=>fetch('AllApps.json'),
          path:"/apps",
          Component: AllApps
        },
        {
         index:true,
          loader:()=>fetch('AllApps.json'),
          path:"/appdetails/:id",
          Component: Appdetails
        }
    ]
  },
]);
