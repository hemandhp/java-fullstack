import { useLocation } from "react-router"

export default function StateReceive() {

    const location = useLocation();

    const data = location.state

    return (
        <div>
            <h1>Receive State Data</h1>
            <p><strong>Name : </strong>{data.name}</p>
            <p><strong>Course : </strong>{data.course}</p>
            <p><strong>Batch : </strong>{data.batch}</p>
        </div>
    )
}