import React from 'react'

// export default function ComParametro(props) {
//     return (
//         <div>
//             <h2>{ props.titulo }</h2>
//              <p>{ props.aluno } { props.texto } { props.nota }</p>
//         </div>
//     )
// }

export default props => {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
    <div>
        <h2>{ props.titulo }</h2>
        <p>
            <strong>{ props.aluno }</strong> tem nota { props.nota } e está { status }
        </p>
    </div>
    )
}