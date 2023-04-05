import { React } from 'react'
import { Router, Route } from 'react-router-dom'

import Home from './Componentes/Home'
import Services from './Componentes/Services'
import Contato from './Componentes/Contato'

export default function App() {
  return (
    <>
      <h1>React Router Appe!</h1>
      <Router>
        <Route path='/' elemente={<Home />} />
        <Route path='/services' elemente={<Services />} />
        <Route path='/contato' elemente={<Contato />} />
      </Router>
    </>
  )
}