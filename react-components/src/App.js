import React from 'react'
import './App.css'

// componentes
import ComponenteUm from './components/ComponenteUm'
import ComponeteDois from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'
import ComponenteSeis from './components/ComponenteSeis'

function App() {
    return (
        <>
            <ComponenteSeis titulo="Componente Seis" />

            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />

            <ComponeteDois />

            <ComponenteUm />
        </>
    )
}

export default App