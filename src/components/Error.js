import { CDN_URL, ERROR_IMAGE } from "../utils/URLs";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <img className="errorImage" src={ERROR_IMAGE}></img>
            <h1>Oops !!!</h1>
            <h2>Something went Wrong !!</h2>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;