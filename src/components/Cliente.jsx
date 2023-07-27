import {useNavigate,Form,redirect} from 'react-router-dom';
import {eliminarRegistro} from './data/Clientes.js'

export async function action({params}){
  await eliminarRegistro(params.clienteId )

  return redirect('/');
}

export default function Cliente({ cliente }) {
  const navigate = useNavigate();
  
  return (
    <div className=" text-center lg:flex lg:flex-row lg:text-left w-full p-10 bg-white" >
 
      <div>
            <p className=" mt-3 lg: m-0 pr-10 pl-10 border-x-2 font-bold">{cliente.nombre}</p>
            <p className=" lg: m-0 pr-10 pl-10 border-x-2 text-xs">{cliente.empresa}</p>
      </div>

      
        <div>

         <p className=" mt-3 lg: m-0 uppercase font-bold pr-10 pl-10 border-x-2 text-grey-700 text-sm">Email: <span className=" font-normal lowercase">{cliente.email}</span></p>

        </div>

        <div>
        <p className=" mt-3 lg: m-0 uppercase font-bold pr-10 pl-10 border-x-2 text-grey-700 text-sm">Telefono: <span className=" font-normal lowercase">{cliente.telefono}</span></p>
        </div>

        <div className="pb-0 flex justify-center mt-3 lg:justify-left lg:m-0 pl-3 lg:pb-2">
            <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs items-center justify-center" onClick={()=> navigate (`/clientes/${cliente.id}/editar`)}>Editar</button>
        </div>

        <div className="flex pb-5 pl-3 justify-center mt-3 lg:justify-left">
         <Form method='post' action={`/clientes/${cliente.id}/eliminar`} 
          onSubmit={(e)=>
          {if(!confirm("¿Deseas eliminar Este registro?")){ //EN CASO DE QUE LE DE A ACEPTAR, PROSIGUE EL CODIGO, ES DECIR, NO PREVIENE LA ACCION POR DEFAULT
            e.preventDefault();
          }}}> {/*CREO UN ACTION PARA ENVIAR DATOS POR URL Y ASI DETECTAR LA ID*/}

            <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs items-center justify-center">Eliminar</button>

         </Form>
        </div>
        
    </div>
  );
}
