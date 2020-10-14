import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className="linha">
        <Card title="Card 1" red>X</Card>
      </div>
      <div className="linha">
        <Card title="Card 2" green>Y</Card>
      </div>
      <div className="linha">
        <Card title="Card 3" blue>Y</Card>
      </div>
      <div className="linha">
        <Card title="Card 4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
