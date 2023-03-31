import React, {useReducer} from 'react'

export default function App() {

  const [state, dispatch] = useReducer(reducer, {
    valor: 100,
    mostrar: true
  })

  function reducer(state, action){
    switch (action.type) {
      case 'INCREMENTAR':
        return {
          valor: state.valor + 1,
          mostrar: state.mostrar
        }

        case 'VISIBILIDADE':
        return {
          valor: state.valor,
          mostrar: !state.mostrar
        }
    
      default:
        return state
    }
  }

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />
      <p>Valor: {state.valor}</p>      
      {state.mostrar && <p>Visível</p>}
      <button onClick={()=>{dispatch({type: 'INCREMENTAR'})}} >Incrementar</button>
      <button onClick={()=>{dispatch({type: 'VISIBILIDADE'})}} >Mostrar/Esconder</button>
    </>
  )
}

//----------------------------------

/* Exemplo com useState

import React, {useState} from 'react'

export default function App() {

  const [valor, setValor] = useState(100)
  const [mostrar, setMostrar] = useState(true)

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />
      <p>Valor: {valor}</p>
      {mostrar && <p>Visível</p>}

      <button onClick={() => {setValor(valor + 1)}}>Incrementar</button>
      <button onClick={() => {setMostrar(!mostrar)}}>Mostrar/Esconder</button>
    </>
  )
}*/