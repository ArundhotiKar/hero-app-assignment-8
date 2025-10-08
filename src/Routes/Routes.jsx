import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import Appdetails from '../Pages/AppDetails/Appdetails';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            loader:()=>fetch('/JsonData.json'),
            Component:Home
        },
        {
         
          path:"apps",
          loader:()=>fetch('/AllApps.json'),
          Component: AllApps
        },
        {
          path:"appdetails/:id",
          loader:()=>fetch('/AllApps.json'),
          Component: Appdetails
        },
        {
           path:"installation",
           loader:()=>fetch('/AllApps.json'),
           Component:Installation
        }
    ]
  },
]);
