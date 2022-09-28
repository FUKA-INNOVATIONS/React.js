type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean,
    isNegative?: never,
    isPositive?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

// type RandomNumberProps = {
//     value: number,
//     isPositive?: boolean,
//     isNegative?: boolean,
//     isZero?: boolean
// }

export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
    return (
        <>
            <h2>RandomNumber</h2>
            <p>
                {value} is {isPositive && 'positive'} {isNegative && 'negative'} {' '} {isZero && 'zero'}
            </p>
        </>
    )
}