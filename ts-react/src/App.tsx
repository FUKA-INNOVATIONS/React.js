//import React from 'react';
import './App.css';
import Todos from "./Components/Todos";
import Todo from "./models/TodoModel";
import NewTodo from "./Components/NewTodo";
import TodoModel from "./models/TodoModel";
import {useState} from "react";

const App = () => {
    const [todos, setTodos] = useState<TodoModel[]>([new TodoModel('Prepare for Friday!')])

    const addTodoHandler = (text: string) => {
        const newTodo = new TodoModel(text)
        // setTodos([...todos, newTodo])
        setTodos(prevTodos => prevTodos.concat(newTodo))
    }

    const removeTodoHandler = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler} />
        </div>
    );
}

export default App;
