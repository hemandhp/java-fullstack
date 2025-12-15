import { useLocation } from "react-router-dom";

export default function CurrentPath() {
    const location = useLocation();
    return (
        <div>
            <strong>Current Pathname : {location.pathname}</strong>
        </div>
    )
}