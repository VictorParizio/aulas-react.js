import React, { useEffect, useState, useMemo } from 'react'

export default function App() {

  const [valor, setValor] = useState(() => { return 0 })
  const [numero, setNumero] = useState(() => { return 1000 })

  // const valorCalculado = funcaoDemorada(valor)
  const valorCalculado = useMemo(() => {
    return funcaoDemorada(valor)
  }, [valor])

  useEffect(() => {
    console.log('render')
  })

  function incrementar() {
    setValor((oldValor) => oldValor + 1)
  }

  function incrementar2() {
    setNumero((oldNumero) => oldNumero + 100)
  }

  function funcaoDemorada(nun) {

    for (let i = 0; i < 1000000000; i++) { }

    return nun * 2
  }

  return (
    <>
      <h3>React Hooks - useMemo</h3>
      <hr />
      <p>Valor: {valor}</p>
      <p>Numero: {numero}</p>
      <p>Valor calculado: {valorCalculado}</p>
      <button onClick={incrementar} >Incrementar</button>
      <button onClick={incrementar2} >Incrementar</button>
    </>
  )
}