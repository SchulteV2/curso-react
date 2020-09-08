import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <hr/>
            <Aleatorio min={1} max={60}/>
            <Fragmento />
            <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota="9.3" />
            <Primeiro />
        </div>
    );
}