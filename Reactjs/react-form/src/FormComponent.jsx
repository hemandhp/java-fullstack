import { useState } from "react";

function FormComponent() {
    const [formData, setformData] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <input type="text" placeholder="Enter Your Name" name="name"
                value={formData.name}
                onChange={handleChange} />

            <br />

            <input type="email" placeholder="Enter Your Email" name="email"
                value={formData.email}
                onChange={handleChange} />

            <br />

            <p>Name:{formData.name}</p>
            <p>Email:{formData.email}</p>

        </div>
    )
}

export default FormComponent