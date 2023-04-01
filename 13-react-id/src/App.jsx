import React, { useId } from 'react'

export default function App() {

  const id1 = useId()
  const id2 = useId()
 
  return (
    <>
      <h1>React - useId</h1>
      <hr />
      <form action="#" method='post' > 
        <input type="radio" name='masculino' id={id1} />
        <label htmlFor={id1}>Masculino</label>
        <br />
        <input type="radio" name='masculino' id={id2} />
        <label htmlFor={id2}>Feminino</label>
      </form>
    </>
  )
}