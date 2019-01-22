import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aplicação React Número 1</h1>
        <p>Funcionando ok!</p>
        <Person nome="Villar" idade="73"/>
        <Person nome="Henrique" idade="31"/>
        <Person nome="Werther" idade="36">Meu hobby é Hobie Cat!</Person>
      </div>
      // React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Aplicação React 1'))
      );
  }
}

export default App;
