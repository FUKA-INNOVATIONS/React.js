import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext?.setUser({
            name: 'FUKA',
            email: 'fuka@fuka-inovvations.com'
        })
    }
    const handleLogout = () => {
        userContext.setUser(null)
    }

    return (
        <div style={{padding: 30}}>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {userContext.user?.name}</p>
            <p>User email is {userContext.user?.email}</p>
        </div>
    )
}