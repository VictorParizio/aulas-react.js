import React from 'react'
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Componentes/Header'
import Home from './Componentes/Home'
import Services from './Componentes/Services'
import Contato from './Componentes/Contato'
import Erro from './Componentes/Erro'
import About from './Componentes/About'
import Footer from './Componentes/Footer'

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Erro />} />
      </Routes>

      <Footer />
    </>
  )
}