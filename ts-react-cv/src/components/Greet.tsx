type GreetProps = {
    name: string,
    messagecount: number,
    isLoggedIn: boolean
}


export const Greet = (props: GreetProps) => {
    return (
        <>
            <h2>Welcome {props.name}, you have {props.messagecount} messages!</h2>
        </>
    )
}