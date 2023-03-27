import React, { useState, useEffect } from "react";

export default function App() {

    const clientes = ['João', 'Ana', 'Carlos']
    const produtos = ['Pão', 'Manteiga', 'Leite']
    const vendas = ['1 x Pão (João)', '2 x Manteiga (Ana)', '3 x Leite (Carlos)']

    const [info, setInfo] = useState('Lista')
    const [valor, setValor] = useState(10)

    useEffect(() => {
        console.clear()
        switch (info) {
            case 'Clientes':
                console.table(clientes)
                break;
            case 'Produtos':
                console.table(produtos)
                break;
            case 'Vendas':
                console.table(vendas)
                break;
        }
    }, [info])

    useEffect(() => {
        console.log('Aumentou')
    }, [valor])

    return (
        <>
            <h1>React Hooks - useEffect</h1>
            <hr />
            <button onClick={() => setInfo('Clientes')}>Clientes</button>
            <button onClick={() => setInfo('Produtos')}>Produtos</button>
            <button onClick={() => setInfo('Vendas')}>Vendas</button>
            <h3>{info}</h3>

            <hr />
            <button onClick={() => setValor(valor + 10)} >Aumentar</button>
            <h3>{valor}</h3>
        </>
    )
}