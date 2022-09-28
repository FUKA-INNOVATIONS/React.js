type OscarProps = {
    children: JSX.Element | JSX.Element[]
}

export const Oscar: React.FC<OscarProps> = (props) => {
    return (
        <>
           <b>Oscar goes to Hading children</b>
            {props.children}
        </>
    )
}   