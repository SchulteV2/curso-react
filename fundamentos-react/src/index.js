import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const el = document.getElementById('root')

ReactDOM.render(
   <div>
      <Primeiro />
      <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota="9.3" />
   </div>, 
   el)