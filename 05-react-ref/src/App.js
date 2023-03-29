import React, { useState, useEffect, useRef } from "react";

export default function App() {

    const [texto, setTexto] = useState('')
    const anterior = useRef('')

    useEffect(() => {
        anterior.current = texto
    }, [texto])

    function executar(){}

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input type="text" onChange={e => { setTexto(e.target.value) }} />
            <br />
            <hr />
            <button onClick={executar}>Executar</button>
            <p>Texto: <strong>{texto}</strong> (texto anterior) {anterior.current} </p>
        </>
    )
}

//----------------------------

/*
import React, { useState, useRef } from "react";

export default function App() {

    const [texto, setTexto] = useState('')
    const inputRef = useRef()

    function executar() {
        console.log(inputRef.current.value)
        setTexto(inputRef.current.value)
    }

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input ref={inputRef} type="text" />
            <br />
            <hr />
            <button onClick={executar}>Executar</button>
            <p>Texto: <strong>{texto}</strong></p>
        </>
    )
}*/

//----------------------------

/*
import React, { useState, useEffect, useRef } from "react";

export default function App() {

    const [texto, setTexto] = useState('')
    const total = useRef(1)

    useEffect(()=>{
        total.current++
    })

    return (
        <>
            <h1>React Hooks - useRef</h1>
            <hr />
            <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
            <hr />
            <p>O texto é: <strong>{texto}</strong></p>
            <hr />
            <p>Total: {total.current}</p>
        </>
    )
}*/