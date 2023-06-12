import { useActions } from "../hooks/useActions"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { UserForm } from "./UserForm"

export const SignUp = () => {
    const {setUser} = useActions()
    const navigate = useNavigate()

    const handleSignUp = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            title="sign up"
            handleClick={handleSignUp}
        />
    )
}