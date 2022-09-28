import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Fuwad Kalhori',
            email: 'fuwad.kalhori@gmail.com'
        })
    }
    const handleLogout = () => {setUser(null)}

    return (
        <>
            <h2>User component</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {
                user ? `Hello ${user.name} (${user.email})`
                : 'Please login'
            }
            <p>User: {user?.name}</p>
        </>
    )
}