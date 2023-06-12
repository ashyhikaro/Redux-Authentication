import { useActions } from "../hooks/useActions"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { UserForm } from "./UserForm"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {setUser} = useActions()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                })
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <UserForm 
            title="sign in"
            handleClick={handleLogin}
        />
    )
}