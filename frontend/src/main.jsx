import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import TestNutricional from './pages/TestNutricional.jsx'
import Register from './pages/Register.jsx'
import Menu from './pages/Menu.jsx'
import GestionarUsuario from './pages/GestionarUsuario.jsx'
import Subscription from './pages/Subscription.jsx';
import VerPlan from './pages/VerPlan.jsx'
import AdministrarPacientes from './pages/AdministrarPacientes.jsx'
import AdministrarPaciente from './pages/AdministrarPaciente.jsx'
import SeguimientoEstado from './pages/SeguimientoEstado.jsx'

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
  path: '/register',
  element: <Register />,
  errorElement: <div>404</div>
},

{
  path:'/testnutricional',
  element:<TestNutricional/>,
  errorElement:<div>404</div>
},
{
  path:'/menu',
  element:<Menu/>,
  errorElement:<div>404</div>
},
{
  path:'/gestionarusuario',
  element:<GestionarUsuario/>,
  errorElement:<div>404</div>
},
{
  path:'/subscription',
  element:<Subscription/>,
  errorElement:<div>404</div>
},
{
  path:'/verplan',
  element:<VerPlan/>,
  errorElement:<div>404</div>
},
{
  path:'/administrarpacientes',
  element:<AdministrarPacientes/>,
  errorElement:<div>404</div>
},
{
  path:'/gestionarpaciente',
  element:<AdministrarPaciente/>,
  errorElement:<div>404</div>
},
{
  path:'/seguimientoestado',
  element:<SeguimientoEstado/>,
  errorElement:<div>404</div>
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);