import React, { useState } from "react";

export default function App() {

    const [name, setName] = useState(() => {
        return "João"
    })

    function change() {
        setName(() => {
            return "Joaquim"
        })
    }

    return (
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <h3>Nome: {name}</h3>
            <button onClick={change} >Alterar</button>
        </>
    )
}