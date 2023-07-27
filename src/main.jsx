import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {router} from './router/router.jsx' //IMPORTO LA VARIABLE EXPORTADA DEL ARCHIVO DE ROUTER.JSX, la cual dentro de si tiene la funcion de createBrowserRouter que posee un array de objetos con todas las rutas y compoenntes correspoondientes al dominio(URL)
import './index.css'


//ROUTERPROVIDER
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
)
