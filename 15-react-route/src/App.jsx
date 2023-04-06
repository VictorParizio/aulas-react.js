import { React, useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Componentes/Header'
import Home from './Componentes/Home'
import Services from './Componentes/Services'
import About from './Componentes/About'
import Contato from './Componentes/Contato'
import AreaReservada from './Componentes/AreaReservada'
import Erro from './Componentes/Erro'
import Footer from './Componentes/Footer'

export default function App() {

  const [logado] = useState(false)
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services/*' element={<Services />}/>
        <Route path='/contato' element={<Contato />} />
        <Route path='/about/:servico/:teste' element={<About />} />

        <Route
          path='/area_reservada'
          element={
            logado ? <AreaReservada /> : <Navigate to='/' />
          } />

        <Route path='/*' element={<Erro />} />
      </Routes>

      <Footer />
    </>
  )
}