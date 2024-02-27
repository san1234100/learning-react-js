import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () =>{
    const { status, statusText } = useRouteError();
    return (
        <div className="pt-60 text-white space-y-4 max-w-4xl mx-auto">
         <p className="text-5xl">Oops...</p>
         <p className="text-4xl">#{status} {statusText}</p>
         <p className="text-4xl">Sorry,something went wrong <Link to={'/'} className="text-lg text-blue-400 hover:underline">Go Back to home</Link></p>
        </div>
    )
}

export default ErrorPage;