import React, { useState, useCallback } from 'react'
import Lista from './Lista'
import './App.css'

export default function App() {

  const [numero, setNumero] = useState(100)
  const [temaEscuro, setTemaEscuro] = useState(false)

  const calculos = useCallback(() => {
    return [numero * 2, numero * 3, numero * 4]
  }, [numero])

  const tema = {
    backgroundColor: temaEscuro ? "black" : "white",
    color: temaEscuro ? "white" : "black",
    height: "100vh"
  }

  return (
    <div style={tema}>
      <h1>React - useCallback</h1>
      <hr />
      <button onClick={() => setTemaEscuro(temaEscuro => !temaEscuro)}>Alterar Tema</button>
      <p>Numero: {numero}</p>
      <button onClick={() => setNumero(numero => numero + 1)}>Incrementar</button>
      <hr />
      <Lista resultados={calculos} />
    </div>
  )
}