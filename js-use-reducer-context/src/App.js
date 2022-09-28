import { useReducer, useRef, createContext } from 'react';
import './App.css';
import Account from './components/Account';

export const UserContext = createContext()


export const ACTIONS = {
  CHANGE_PASSWORD: 'Change password',
  CHANGE_EMAIL: 'Change email',
  CHANGE_USERNAME: 'Change username'
}

const initialState = {
  userName: 'fuka',
  password: 123456,
  email: 'fuad.kalhori@gmail.com'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_EMAIL:
      return { ...state, email: 'fuwad.kalhori@metropolia.fi' }
    case ACTIONS.CHANGE_PASSWORD:
      return { ...state, password: (state.password++) }
    case ACTIONS.CHANGE_USERNAME:
      return { ...state, userName: action.data.newUsername }
    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nameRef = useRef()

  const changeEmailHandler = () => dispatch({ type: ACTIONS.CHANGE_EMAIL })
  const changePasswordHandler = () => dispatch({ type: ACTIONS.CHANGE_PASSWORD })


  const changeUsernameHandler = event => {
    event.preventDefault()
    dispatch({ type: ACTIONS.CHANGE_USERNAME, data: { newUsername: nameRef.current.value } })
  }

  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      <div className="App">
        <h2>useReducer</h2>

        <br />
        <p>Username: {state.userName}</p>
        <p>Email: {state.email}</p>
        <p>Password: {state.password}</p>
        <br />
        <button onClick={changeEmailHandler}>change email</button>
        <button onClick={changePasswordHandler}>change pasword</button>
        <br />
        <form onSubmit={changeUsernameHandler}>
          <input type={'text'} ref={nameRef} placeholder='Change username' />
          <button type='submit'>Change username</button>
        </form>
        <br />
        <Account />
      </div>
    </UserContext.Provider>
  );
}

export default App;
