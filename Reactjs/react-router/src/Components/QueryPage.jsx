import { useLocation } from "react-router";

export default function QueryPage() {
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const category = params.get("category");

    const price = params.get("price");

    return (
        <div>
            <h1>Query Parameter Page</h1>
            <p><strong>Categories : {category}</strong></p>
            <p><strong>Price : {price}</strong></p>
        </div>
    )
}