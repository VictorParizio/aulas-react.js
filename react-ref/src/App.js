import React, { useState, useEffect, useRef } from "react";

export default function App() {

    const [texto, setTexto] = useState('')
    const total = useRef(1)

    useEffect(()=>{
        total.current++
    })

    return (
        <>
            <h1>React Hooks - useEffect</h1>
            <hr />
            <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
            <hr />
            <p>O texto é: <strong>{texto}</strong></p>
            <hr />
            <p>Total: {total.current}</p>
        </>
    )
}