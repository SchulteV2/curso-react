import React from 'react';

import Intervalo from './components/Intervalo'
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className="linha">
        <Intervalo title="Card 1">X</Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green>Y</Card>
        <Card title="Card 3" blue>Y</Card>
        <Card title="Card 4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
