import React, { useState } from 'react'
import Nomes from './Nomes'

export default function App() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])

  function guardarNome(){
    setNomes(lista => [...lista, nome])
  }

  return (
    <>
      <h3>React Unique ID</h3>
      <hr />
      <input type="text" onChange={e => setNome(e.target.value)} value={nome} />
      <button onClick={guardarNome} >Guardar nome</button>
      <hr />
      <Nomes nomes={nomes} />
    </>
  )
}