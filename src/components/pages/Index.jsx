import{ useLoaderData } from 'react-router-dom' // importo hook para obtener datos del loader
import Cliente from '../Cliente.jsx';
import { obtenerClientes } from "../data/Clientes.js";

export  function loader(){
     const clientes = obtenerClientes();
    return clientes;
     //ERROR BOUNDRIES SON COMPONENTES DE REACT QUE OBTIENEN ERRORES y los muestran a traves de una interfaz en donde ocuyrrio el error.
}


export default function Index(){

    const datos = useLoaderData(); //Extraigo los datos del loader //DEVUELVE ARRAY DE OBJETOS

    return(
        <>
            <h1 className="text-blue-800 text-4xl font-black">Clientes</h1>
            <p className="capitalize mt-3">Administra tus clientes</p>

            <div className="w-full bg-blue p-5">
                <div className="encabezado md:flex md:flex-row p-6 pl-10 w-full  items-start  bg-blue-700 text-white uppercase font-bold">
              
                    <p className='pr-20'>Cliente</p>
                    <p className='pr-20'>Mail</p>
                    <p className='pr-20'>Telefono</p>
                    <p className='pr-20'>Acciones</p>
                  
              
                </div>
                {Object.keys(datos).length>0 && datos.map(cliente=>(
                    <>
                      <Cliente cliente={cliente} key={cliente.id}/>
                    <hr />
                    </>
                
               
                ))}


            </div>
            
        </>
    )
}