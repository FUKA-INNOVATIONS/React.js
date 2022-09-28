type HeadingProps = {
    children?: React.ReactElement | React.ReactElement[]
}

export const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <>
            {props.children}
        </>
    )
}