import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const linhas = produtos.map((produto, i) => {
        return (
            <tr className={ i % 2 == 0 ? 'Par' : 'Impar'} key={ produto.id }>
                <td>{ produto.id }</td>
                <td>{ produto.nome }</td>
                <td>R$ { produto.preco.toFixed(2).replace('.', ',') }</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                { linhas }
                </tbody>
            </table>
        </div>
    )
}