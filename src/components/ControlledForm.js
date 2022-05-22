import { useState } from "react";

const RegistrationForm = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPass, setConfirmedPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = ({ target: {value, name }}) => {
        switch(name) {
            case "mail": {
                setMail(value);
                break;
            }
            case "password": {
                setPassword(value);
                break;
            }
            case "confirmedPass": {
                setConfirmedPass(value);
                break;
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");

        if (password != confirmedPass) {
            setErrorMessage("Error! The passwords you typed do not match. Please ensure value provided for 'Password' field matches the value provided for 'Confirm Password' field.");
            return;
        }

        if (mail == "" || password == "" || confirmedPass == "") {
            setErrorMessage("All fields is required!");
            return;
        }

        console.log("E-mail:", mail);
        console.log("Password:", password);
        console.log("Confirmed password:", confirmedPass);
        handleReset();
        console.log("Success!")
    }

    const handleReset = () => {
        setMail("");
        setPassword("");
        setConfirmedPass("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mail:
                <input
                    type="email"
                    name="mail"
                    value={mail}
                    onChange={handleChange}
                />
            </label>

            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </label>

            <label>
                Confirm password:
                <input
                    type="password"
                    name="confirmedPass"
                    value={confirmedPass}
                    onChange={handleChange}
                />
            </label>

            {errorMessage && <div>{errorMessage}</div>}

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>


        </form>
    )

}

export default RegistrationForm;