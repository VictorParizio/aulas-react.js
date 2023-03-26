import React, { useState } from "react";

export default function App() {

    const [valor, setValor] = useState(()=>{
        return 1000
    })

    function diminuir() {
        setValor(valor => valor - 1)
    }

    function aumentar() {
        setValor(valor => valor + 1)
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <button onClick={diminuir}>Diminuir</button>
            <span>{valor}</span>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )
}