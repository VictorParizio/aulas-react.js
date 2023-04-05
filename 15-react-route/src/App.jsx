import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './Componentes/Home'
import Services from './Componentes/Services'
import Contato from './Componentes/Contato'
import Erro from './Componentes/Erro'

export default function App() {
  return (
    <>
      <h1>React Router App!</h1>

      <nav className='container'>
        <div className="row">
          <div className="col text-center">
            <Link className='btn btn-primary me-3' to='/'>Home</Link>
            <Link className='btn btn-primary me-3' to='/services'>Services</Link>
            <Link className='btn btn-primary' to='/contato'>Contato</Link>
          </div>
        </div>
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