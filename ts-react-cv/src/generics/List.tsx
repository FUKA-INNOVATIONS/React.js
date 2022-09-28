type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

export const List = <T extends {id: number}>({ items, onClick }: ListProps<T>) => {

    return (
        <>
            <h2>List components -generics-</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.id}
                    </div>
                )
            })}
        </>
    )
}