export async function obtenerClientes() {

    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();
    return data;

}

export async function agregarCliente(datos) {

    try {
        const response = await fetch(import.meta.env.VITE_API_URL, { //LEO LA API JSON CON TODOS LOS CLIENTES
            method: "POST", //LE INDICO QUE VA A SER POST, ES DECIR, PARA AGREGAR NUEVO CLIENTE
            body: JSON.stringify(datos), //CONVIERTO EL FORMATO DE OBJETO A JSON DEL CLIENTE A REGISTRAR
            headers: {
                'Content-Type': 'application/json' //LE INDICO QUE LA PETICION ES DE TIPO JSON
            }
        });

        await response.json(); //NO EJECUTO LO QUE SIGUE HASTA COMPLETAR EL FETCH Y PROCESAMIENTO DE DATOS

    } catch (error) {
        console.log(error);
    }

}

export async function obtenerCliente(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const respuesta = response.json();
    return respuesta;
}


export async function editarRegistroCliente(id,datos){
    try {
        const response = fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error)
    }

    
}

export async function eliminarRegistro(id){

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:"DELETE" //NO ENVIAMOS INFORMACION, POR LO TANTO NO ES NECESIARIO UN BODY NI UN HEADERS
        });
        
        await response.json();
        
    } catch (error) {
            console.log(error)
    }

}