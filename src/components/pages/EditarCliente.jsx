import { obtenerCliente } from "../data/Clientes";
import {
    useLoaderData,
    Form,
    useNavigate,
    useActionData,
    redirect
} from "react-router-dom";
import Formulario from "../Formulario";
import Error from '../Error';
import { editarRegistroCliente } from "../data/Clientes";

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId);

    if (Object.values(cliente).length === 0) {
        //CREO UN ERROR EN CASO DE QUE NO ME ENCUENTRE CLIENTE.
        throw new Response("", {
            status: 404,
            statusText: "El cliente no fue encontrado",
        });
    }

    return cliente;
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    
    }

    let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    ); //    if(Object.fromEntries(formData).email === ''){

    if (!regex.test(Object.fromEntries(formData).email)) {
        errores.push("El email No tiene un formato valido");
    }


    if(Object.values(errores).length>0){
        return errores;

    }

    await editarRegistroCliente(params.clienteId,datos);
    return redirect('/')
    
 
}

export default function EditarCliente() {
    const cliente = useLoaderData();
    const navigate = useNavigate();
    const data = useActionData();

    return (
        <>
            <h1 className="text-blue-800 text-4xl font-black">Editar Cliente</h1>
            <p className="capitalize mt-3">
                Llena todos los campos para editar un cliente
            </p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
            {data?.length && data.map((error,i) => (
                <Error key={i}>{error}</Error>

        ))}
           
            <Form noValidate method="POST">
                
                <Formulario cliente={cliente} />
                <input
                    type="submit"
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    value="Editar cliente"
                />
            </Form>
        </>
    );
}
