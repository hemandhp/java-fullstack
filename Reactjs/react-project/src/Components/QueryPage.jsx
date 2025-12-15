import { useLocation } from "react-router";

export default function QueryPage() {
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const batch = params.get("batch");

    const register = params.get("register");

    return (
        <div>
            <h1>Query Parameter Page</h1>
            <p><strong>Batch : {batch}</strong></p>
            <p><strong>Register Number : {register}</strong></p>
        </div>
    )
}