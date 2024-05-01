import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import TestNutricional from './pages/TestNutricional.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>404</div>
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<div>404</div>
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<div>404</div>
  },
  {
    path:'/testnutricional',
    element:<TestNutricional/>,
    errorElement:<div>404</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);