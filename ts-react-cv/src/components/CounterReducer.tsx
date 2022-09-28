import { useReducer } from "react"



type State = { count: number }

type ResetAction = {
    type: 'reset'
}

type UpdateAction = {
    type: 'increment' | 'decrement', 
    payload: number
}



type Action = UpdateAction | ResetAction

const initialState = { count: 0 }



const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}


export const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h2>Counter Reducer</h2>
            <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <p>initial state: {initialState.count} | current state: {counterState.count}</p>
        </>
    )
}