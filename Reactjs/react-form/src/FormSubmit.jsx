import { useState } from "react";

function FormSubmit() {
    const [data, setData] = useState({ userName: "" })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const  handleSubmit  = (e) => {
        e.preventDefault();
        console.log("Form Submitted", data);
        alert(`Form Submitted Username: ${data.userName}`);
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" name="userName" onChange={handleChange} placeholder="Enter Your Username" />
            <br />
            
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default FormSubmit