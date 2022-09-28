import { PersonProps } from "../types/Person.types"

export const Person = ({ name }: PersonProps): JSX.Element => {
    return (
        <>
            <div>
                <p>Hello {name.first} {name.last}</p>
            </div>
        </>
    )
}