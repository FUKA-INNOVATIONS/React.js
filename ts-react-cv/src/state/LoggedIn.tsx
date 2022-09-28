import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean | null>(null)

    const handleLogin = () => {setIsLoggedIn(true)}
    const handleLogout = () => {setIsLoggedIn(false)}

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
        </>
    )
}