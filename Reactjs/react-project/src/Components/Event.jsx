import{ useLocation } from "react-router-dom"
export default function Event() {
    const location = useLocation();

    const data = location.state
    return (
        <div>
            <h1>Detials About the student</h1>
            <p><strong>Name : {data.name}</strong></p>
            <p><strong>Course : {data.course}</strong></p>
            <p><strong>Batch : {data.batch}</strong></p>
            <p><strong>Mode : {data.mode}</strong></p>
        </div>
    )
}

