# CRM-Clientes

Al ser un modelo de desarrollo, para ejecutar el proyecto, segui los siguientes pasos:
<h2>Ejecutar proyecto</h2>
<blockquote>asdasdasdasdas</blockquote>


CRM - Clientes es un administrador de clientes, el cual permite añadir clientes, editar y eliminarlos. Esta basado en un sistema CRUD, sin necesidad de usar un lenguaje backend para la creacion de una REST API, de lo contrario, se utilizo json-server, el cual sirve para crear una REST Api falsa en formato JSON que se ejecuta en un host de nuestra PC.
Este proyecto fue desarrollado con REACT, Vite como entorno de ejecución, TailwindCSS para estilizacion moderna y optima.
Asimismo, se utilizo REACT-ROUTER-DOM Para incluir paths, y redireccionamientos a traves de los componentes otorgados por dicho paquete como Link, la funcion redirect y navigate(El cual es un custom hook brindado por el paquete instalado). Luego, se utilizo una REST Api para cargar clientes en formato JSON para simular un entorno de desarrollo del lado del servidor, para asi consumirlo en el cliente a traves de un loader. Un loader es un "cargador" como su palabra propia lo dice, este mismo sirve para obtener datos o informacion. Este loader nos permitio lograr un sistema CRUD eficaz y reutilizable, donde se aprendio a utilizar los metodos HTTP, PUT, POST, Y DELETE.
Se utilizo fetchAPI para consumir la APIREST creada. Se utilizaron variables de entorno para proteccion de los datos de la URL.

