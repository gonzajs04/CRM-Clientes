import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Index from '../components/pages/Index.jsx';
import NuevoCliente from "../components/pages/NuevoCliente.jsx";
import {loader as clientesLoader} from  '../components/pages/Index.jsx';
//ACTION DEL FORMULARIO de NUEVO CLIENTE
import {action as nuevoClienteAction} from '../components/pages/NuevoCliente.jsx';

//IMPORT ERRORBOUNDRIE PERSONAL EN CASO DE QUE FALLE PARA UN 
import ErrorPage from  '../components/ErrorPage.jsx';

//EDITAR CLIENTE
import EditarCliente from '../components/pages/EditarCliente.jsx'
import {loader as editarClienteLoader} from '../components/pages/EditarCliente.jsx';
import {action as editarClienteAction} from '../components/pages/EditarCliente.jsx';

//BORRAR CLIENTE

import {action as deleteAction} from '../components/Cliente.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      //TERCER CHILDREN | INDEX:TRUE
      {
        index: true, //NOS PERMITE DEFINIR UN NUEVO ELEMENTO EN LA PAGINA PRINCIPAL, ES DECIR EN EL PATH: /
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },

      //PRIMER CHILDREN | PRIMER PATH / NOSOTROS

      
        //todo lo que este aca dentro, va a tener aplicado el componmente LAYOUT. Para que esto sirva, en el componente de layout tenemos que hacer uso del import  { Outlet } from      "react-router-dom"; y utilizarlo como componente en LAYOUT.JS
       
  
      //SEGUNDO CHILDREN ||  segundo path /clientes/nuevo

      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path:"/clientes/:clienteId/editar",
        element:<EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement:<ErrorPage/>
      },

      {
        path:"/clientes/:clienteId/eliminar",
        action: deleteAction
       
      }
    ],
  },
]);
