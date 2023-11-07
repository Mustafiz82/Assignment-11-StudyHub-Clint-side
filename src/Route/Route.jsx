import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
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
          element: <MyAssingments></MyAssingments>
        },
        {
          path: "/CreateAssignment",
          element: <CreateAssignment></CreateAssignment>
        },
        {
          path: "/submitedAssingment",
          element: <SubmitedAssingment></SubmitedAssingment>
        },
        {
          path: "/assignments/:id",
          element: <AssignmentDetail></AssignmentDetail>
        },
        {
          path: "/updataAssignment/:id",
          element: <UpdateAssignment></UpdateAssignment>
        },
      ],
    },
  ]);



export default router;