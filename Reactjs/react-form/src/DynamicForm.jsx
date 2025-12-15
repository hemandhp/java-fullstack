import { useState } from "react";

const field = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Age", name: "age", type: "number" }
];

function DynamicForm() {
    const [formData, setFormData] = useState({});



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dynamic Form Data: ", formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {field.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <input type={field.type} name={field.name} onChange={handleChange} />
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    )
}
export default DynamicForm