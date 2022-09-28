import React from "react"

type StatusProps = {
    status: 'Loading' | 'Success' | 'Error'
}

type StatusPropsEnum = {
    status: 'Loading' | 'Success' | 'Error'
}

enum statusOption {
    LOADING = 'Loading',
    SUCCESS = 'Success',
    ERROR = 'Error'
}

export const Status: React.FC<StatusPropsEnum> = ({ status }) => {
    return (
        <>
            {
                <p>Status: {status}</p>
            }
        </>
    )
}