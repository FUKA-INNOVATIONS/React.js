import React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
    return (
        <>
            <p>Hello from Input component</p>
            <input type={'text'} placeholder={value} onChange={handleChange} />
        </>
    )
}