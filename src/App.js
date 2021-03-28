import React from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld'
import HelloUser from './components/HelloUser'
import Tick from './components/Tick'
import HelloProps from './components/HelloProps'
// import Clock from './components/Clock'
import EventHandler from './components/EventHandler'
import EventHandlerClass from './components/EventHandlerClass'
import LoginControl from './components/LoginControl'
import Page from './components/WarningBanner'
import DisplayArray from './components/DisplayArray'
import Form from './components/Form'
import Calculator from './components/Calculator'
import Currency from './components/Currency'

function App() {

  const array = ['Element 1', 'Element 2', 'Element 3', 'Element 4']

  return (
    <div className="App">
      {/* 1. Hello World */}
      <HelloWorld />

      {/* 2. Introducing JSX */}
      <HelloUser />

      {/* 3. Rendering Elements */}
      <Tick />

      {/* 4. Components and Props */}
      <HelloProps />

      {/* 5. State and Lifecycle */}
      {/* <Clock /> */}

      {/* 6. Handling Events */}
      <EventHandler />
      <EventHandlerClass />

      {/* 7. Conditional Rendering */}
      <LoginControl />
      <Page />

      {/* 8. Lists and Keys */}
      <DisplayArray array={array}/>

      {/* 9. Forms */}
      <Form />

      {/* 10. Lifting State Up */}
      <Calculator />
      <Currency />
      
      {/* 11. Composition vs Inheritance */}
      {/* 12. Thinking In React */}
    </div>
  );
}

export default App;
