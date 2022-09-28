import React from "react";
import TodoModel from "../models/TodoModel";
import TodoItem from "./TodoItem";


const Todos: React.FC<{ items: TodoModel[], onRemoveTodo: (id: string) => void }> = (props) => {
    console.log(props)

    return (
        <ul>
            {
                props.items.map(todo => <TodoItem key={todo.id} text={todo.text} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}/>)
            }
        </ul>
    )
}


export default Todos;