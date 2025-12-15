import {useForm} from "react-hook-form";

function MyForm() {
    const { register, handleSubmit } = useForm();
    function onSubmit(values) {
        console.log(values);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Enter your name" />
            <input {...register("email")} placeholder="Enter your email id" />
            <button>Submit</button>

        </form>
    )
}
export default MyForm;