import React, {useState, useEffect} from 'react';
import './App.css';
import fetchUser, {createUser} from "./api/fetchUser";
import {UserType} from "./api/UserType";

function App() {
    const [result, setResult] = useState<UserType[]>([]);

    useEffect(() => {
        fetchUser().then(info => setResult(info))
    }, []);

    // result.length > 0 && console.log(result)

    const url = 'https://media.mw.metropolia.fi/wbma/users'
    const newUser = {username: 'soaao?paä_d0s76', password: '11111111', email: 'asldjkasd@asdfasds.ccomc'}
    const createUserHandler = async () => {
        let createdUser = await createUser(url, newUser)
        createdUser = await createdUser.json()
        console.log(createdUser)
    }

    return (
        <div className="App">
            <header className="App-header">
                {result.length > 0 && result.map((value, index) => {
                    return (
                        <div key={index}>
                            <div>{value.gender}</div>
                            <div>{value.email}</div>
                            <div>{value.cell}</div>
                            <button onClick={createUserHandler}>Create new user</button>
                        </div>
                    );
                })}
            </header>
        </div>
    );
}

export default App;