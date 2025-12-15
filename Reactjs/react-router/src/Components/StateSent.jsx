import { Link } from "react-router";

export default function StateSent() {
    return (
        <div>
            <h1>Send State</h1>
            <Link to="/receive-state"
                state={{ name: "Hemand", course: "JAVA-FULL-STACK", batch: "Evening" }}>Go tO Receive page
            </Link>
        </div>
    )
}