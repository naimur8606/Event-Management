import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Providers/AuthProvider';
import Album from './Components/Album/Album';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import CreateUser from './Components/Create&Login/CreateUser';
import Login from './Components/Create&Login/Login';
import PrivateRoute from './Route/PrivateRoute';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: "/album",
        element: <PrivateRoute><Album></Album></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path:"/services/:id",
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path:"/createUser",
        element:<CreateUser></CreateUser>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
