import React, { useReducer } from 'react'

export default function App() {

  const [state, dispatch] = useReducer(reducer, {
    score_1: 0,
    score_2: 0
  })

  function reducer(state, action) {
    switch (action.type) {
      case 'score1':
        return {
          score_1: state.score_1 + 1,
          score_2: state.score_2
        }

      case 'score2':
        return {
          score_1: state.score_1,
          score_2: state.score_2 + 1
        }

      case 'reset':
        return {
          score_1: 0,
          score_2: 0
        }

      default:
        break;
    }
  }

  function incrementar1() {
    dispatch({ type: 'score1' })
  }

  function incrementar2() {
    dispatch({ type: 'score2' })
  }

  function reset() {
    dispatch({ type: 'reset' })
  }

  return (
    <>
      <h3>React Hooks - useReducer</h3>
      <hr />

      <h3>Valor: {state.score_1}</h3>
      <h3>Valor: {state.score_2}</h3>

      <button onClick={incrementar1} >Player 1</button>
      <button onClick={incrementar2} >Player 2</button>
      <button onClick={reset} >Score Reset</button>
    </>
  )
}



//----------------------------------

/* Exemplo com useReducer

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
}*/

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