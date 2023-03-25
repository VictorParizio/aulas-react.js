import React from 'react'
import './App.css'

// componentes
import ComponenteUm from './components/ComponenteUm'
import ComponeteDois from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'
import ComponenteSeis from './components/ComponenteSeis'
import ComponenteSete from './components/ComponenteSete'
import ComponenteOito from './components/ComponenteOito'
import ComponenteNove from './components/ComponenteNove'

function App() {
    return (
        <>

            <ComponenteNove titulo="Componente Nove" valor={"Ana"} />

            <ComponenteOito titulo="Componente Oito" valor="João" />

            <ComponenteSete titulo="Componente Sete" valor={1} />

            <ComponenteSeis titulo="Componente Seis" />

            <ComponenteQuatro titulo="Componente quatro" />

            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />

            <ComponeteDois />

            <ComponenteUm />
        </>
    )
}

export default App