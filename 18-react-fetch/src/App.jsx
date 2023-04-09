import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    fetch('http://localhost:5173/dados/texto.txt')
      .then((response) => response.text())
      .then((texto) => console.log(texto))
  }, [])

  return (
    <>
      <h1>React - Featch Data</h1>
    </>
  )
}