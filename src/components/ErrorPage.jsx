import{useRouteError} from 'react-router-dom';
export default function ErrorPage(){
    const error = useRouteError();
    return(
        <div className="space-y-">
            <h1 className='text-center text-6xl font-extrabold mt-20 mb-10 text-blue-900'>CRM-CLIENTES</h1>
            <p className='text-center'>Hubo un error </p>
            <p className='text-center'>
            {error.message || error.statusText}
            </p>
        </div>
    )
}