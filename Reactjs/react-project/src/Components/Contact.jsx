import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <h1>Send State</h1>
            <Link to="/event"
                state={{ name: "Hemand", course: "JAVA-FULL-STACK", batch: "Evening", mode: "offline" }}>Go tO Receive page
            </Link>
        </div>
    )
}