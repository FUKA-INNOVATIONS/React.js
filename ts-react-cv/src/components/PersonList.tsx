import React from 'react'
import { Name } from '../types/Person.types'
import { Person } from './Person'


type PersonListProps = {
    names: Name[]
}

export const PersonList: React.FC<PersonListProps> = ({ names }) => {
    return (
        <>
            {
                names.map((name, index) => <Person key={index} name={name} />)
            }
        </>
    )
}

