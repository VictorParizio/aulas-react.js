import { useState, useEffect } from 'react'

export default function App() {

  const [cliente, setCliente] = useState({
      "nome": "",
      "email": "",
      "idade": 0
  })

useEffect(() => {
  fetch('http://localhost:5173/dados/data.json')
    .then((response) => response.json())
    .then((data) => setCliente(data))
}, [])

return (
  <>
    <h1>React - Featch Data</h1>
    <hr />z
    <p>Nome dos Clientes: {cliente.nome}</p>
    <p>Nome dos Email: {cliente.email}</p>
    <p>Nome dos Idade: {cliente.idade}</p>
  </>
)
}