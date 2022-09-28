import React from 'react'

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button: React.FC<ButtonProps> = (props) => {
    const x = 1

    return (
        <>
            <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
        </>
    )
}