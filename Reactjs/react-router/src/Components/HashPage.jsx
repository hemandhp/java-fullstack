import { useLocation } from "react-router";

export default function HashPage() {
    const location = useLocation();

    return (
        <div>
            <h1>Hash Page</h1>

            <p><strong>Hash Value = </strong>{location.hash}</p>
        </div>
    )
}