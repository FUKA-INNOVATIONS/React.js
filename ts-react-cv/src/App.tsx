import React from 'react';
import './App.css';
import { Button } from './components/Button';
import Container from './components/Container';
import { CounterReducer } from './components/CounterReducer';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Box } from './context/Box';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import { Oscar } from './Oscar';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';
import { User as UserContextComponent } from './context/User'
import { DomRef } from './ref/DomRef';
import { MutableRef } from './ref/MutableRef';
import { List } from './generics/List';
import { RandomNumber } from './restriction/RandomNumber';

function App() {


  const personName = {
    first: 'Fuwad',
    last: 'Kalhori'
  }

  const nameList = [
    {
      first: 'Kalle',
      last: 'Rantanen'
    },
    {
      first: 'Matti',
      last: 'Meikäläinen'
    },
    {
      first: 'Jan',
      last: 'Eriksson'
    },
  ]

  return (
    <div className="App">
      <Greet name={"Fuad"} messagecount={35} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='Loading' />
      <Oscar>
        <Heading>
          <p>This is Heading child 1</p>
          <p>This is Heading child 2</p>
          <p>This is Heading child 3</p>
        </Heading>
        <Heading />
        <Button handleClick={(event, id) => console.log('event', id)} />
      </Oscar>
      <Input value='enter username' handleChange={(event) => console.log(event.target.value)} />
      <Container styles={{ color: 'red', padding: '1rem' }} />
      <br />
      <LoggedIn />
      <User />
      <CounterReducer />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <UserContextComponent />
      </UserContextProvider>

      <DomRef />
      <MutableRef />

      {/* <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List items={[{ name: 'fuka', id: 21 }, { name: 'fubu', id: 31 }]} onClick={item => console.log(item)} />

      <RandomNumber value={10} isZero/>
    </div>
  );
}

export default App;
