import React, { useState } from "react";

export default function App() {

    /*var valor = 0

    function incrementar(){
        valor++
        console.log(valor)
    }*/

    const [valor, setValor] = useState(100)

    function incrementar() {
        setValor(valor + 1)
    }

    return (
        <>
            <h1>React Hooks</h1>
            <h3>Valor = {valor}</h3>
            <button onClick={incrementar}>Incrementar</button>
        </>
    )
}