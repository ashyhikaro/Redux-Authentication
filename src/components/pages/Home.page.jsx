import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useActions } from 'components/hooks/useActions'
import { getAuth, signOut } from 'firebase/auth'

export const HomePage = () => {
    const {isAuth, email} = useAuth()
    const {removeUser} = useActions()
    const navigate = useNavigate()

    if (isAuth) {
        console.log(1)
        return (
            <div>
                <h1>Home</h1>

                <button onClick={() => removeUser()}>Log out from {email}</button>
            </div>
        )
    } else {
        return navigate('/login')
    }
}