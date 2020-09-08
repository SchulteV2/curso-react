import React from 'react'

export default props => {
    // const min = props.min
    // const max = props.max

    // destructuring
    const {min, max} = props
    
    const aleatorioInteiro = parseInt(Math.random() * (max - min) + min)
    return (
        <h2>Número aleatório  entre { min } e { max } é : { aleatorioInteiro }</h2>
    )
}