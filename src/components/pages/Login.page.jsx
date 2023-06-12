import { Login } from "../auth/Login.jsx"
import { Link } from "react-router-dom"

export const LoginPage = () => {
    return (
        <>
            <h1>Login</h1>

            <Login />

            <p>
                Or <Link to='/registration'>register</Link>
            </p>
        </>
    )
}