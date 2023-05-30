import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();

    return (<div id="error-page">{error}</div>)
}