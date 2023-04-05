import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Componentes/Home'
import Services from './Componentes/Services'
import Contato from './Componentes/Contato'
import Erro from './Componentes/Erro'

export default function App() {
  return (
    <>
      <h1>React Router App!</h1>

      <nav>
        <Link to='/'>Home</Link> | 
        <Link to='/services'>Services</Link> | 
        <Link to='/contato'>Contato</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/*' element={<Erro />} />
      </Routes>
    </>
  )
}