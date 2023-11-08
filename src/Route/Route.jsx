import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Login from '../Pages/Aunthication/Login';
import Regestration from '../Pages/Aunthication/Regestration';
import MyAssingments from '../Pages/MyAssignments/MyAssingments';
import CreateAssignment from '../Pages/createAssignments/CreateAssignment';
import Assignment from '../Pages/assignments/Assignment';
import SubmitedAssingment from '../Pages/SubmitedAssingment/SubmitedAssingment';
import AssignmentDetail from '../Pages/AssignmentDetails/AssignmentDetail';
import UpdateAssignment from '../Pages/UpdateAssignment/UpdateAssignment';
import PrivateRoute from './PrivateRoute';
import PDF from '../Pages/PDF/PDF';
 
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/assignments",
          element: <Assignment></Assignment>
        },
        
        {
          path: "/Regestration",
          element: <Regestration></Regestration>
        },
        {
          path: "/myAssingment",
          element: <PrivateRoute><MyAssingments></MyAssingments></PrivateRoute>
        },
        {
          path: "/CreateAssignment",
          element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
          path: "/submitedAssingment",
          element: <PrivateRoute><SubmitedAssingment></SubmitedAssingment></PrivateRoute>
        },
        {
          path: "/assignments/:id",
          element: <PrivateRoute><AssignmentDetail></AssignmentDetail></PrivateRoute>
        },
        {
          path: "/updataAssignment/:id",
          element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>
        },
        {
          path: "/pdfviewer",
          element: <PrivateRoute><PDF></PDF></PrivateRoute>
        },
      ],
    },
  ]);



export default router;