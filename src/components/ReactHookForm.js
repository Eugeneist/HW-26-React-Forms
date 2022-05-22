import { useForm } from "react-hook-form";

const NewUserForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                First name:
                <input type="text" {...register("firstname", { required: true })} />
                {errors.firstname && <span>First name is a required!</span>}
            </label>

            <label>
                Last name:
                <input type="text" {...register("lastname", { required: true })} />
                {errors.lastname && <span>Last name is a required!</span>}
            </label>

            <label>
                Your country:
                <select {...register("country", { required: true })}>
                    <option value="">Choose your country</option>
                    <option value="Poland">Poland</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="England">England</option>
                </select>
                {errors.country && <span>Country is a required!</span>}
            </label>

            <button type="submit">Submit</button>

        </form>
    )

}

export default NewUserForm;