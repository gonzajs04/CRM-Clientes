import { useNavigate, Form,redirect } from "react-router-dom";
import Formulario from "../Formulario.jsx";
import { useActionData } from "react-router-dom";
import Error from '../Error.jsx'
import {agregarCliente} from '../data/Clientes.js'

export async function action({request}){
    const formData =  await request.formData(); //ESPERO QUE EL FORM DATA TENGA TODOS LOS DATOS
    const data =Object.fromEntries(formData) //CONVIUERTO EL ARRAY DE LLAVE = VALOR A UN OBJETO
    const email  = Object.fromEntries(formData).email; //CONVIUERTO EL ARRAY DE LLAVE = VALOR A UN OBJETo para solo el mail

   
    //VALIDACION
    const errores = []
    if(Object.values(data).includes('')){
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"); //EXPRESION REGULAR PARA EMAIL
    if(!regex.test(email)){
        errores.push("El email no es valido")
    }


   if(Object.keys(errores).length){ //ME FIO SI HAY ERRORES en el array de errores
    return errores;
   }

   await agregarCliente(data) //LE PASO LOS DATOS DEL FORM EN OBJETO
   return redirect('/');

}




export default function NuevoCliente() {
  const navigate = useNavigate();
  const errores = useActionData(); // extraigo la data o errores de la funcion action.
  return (
    <>
      <h1 className="text-blue-800 text-4xl font-black">Nuevo Cliente</h1>
      <p className="capitalize mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length && errores.map((error,i) => (
                <Error key={i}>{error}</Error>

        ))}

        <Form method="post" noValidate   >
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar cliente"
          />
          
        </Form>
      </div>
    </>
  );
}

