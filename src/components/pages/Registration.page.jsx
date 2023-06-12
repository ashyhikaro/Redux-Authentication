import { SignUp } from "../auth/SignUp.jsx"
import { Link } from "react-router-dom"

export const RegistrationPage = () => {
    return (
        <>
            <h1>Register</h1>

            <SignUp />

            <p>
                Already have an account <Link to='/login'>Sign in</Link>
            </p>
        </>
    )
}