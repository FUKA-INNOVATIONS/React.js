import React, { createContext, useState } from "react"

export type AuthUser = {
    name: string,
    email: string
}

export type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}
export const UserContext = createContext({} as UserContextType) // to get rid of null check on Context.? with type assertion
//export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const x = 0
    return <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>
}