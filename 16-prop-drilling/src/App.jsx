import React, { useState } from 'react'
import Userbar from './components/Userbar'

export default function App() {

  const [Usuario, setUsuario] = useState('João')
 
  return (
    <>
      <h3>React - Prop Drilling</h3>
      <Userbar usuario={Usuario} login={setUsuario} />
    </>
  )
}