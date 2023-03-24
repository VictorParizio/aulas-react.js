import React from 'react'
import './App.css'

// componentes
import ComponenteUm from './components/ComponenteUm'
import ComponeteDois from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'

function App() {
    return (
        <>
            <ComponenteQuatro titulo="Componente quatro">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </ComponenteQuatro>
            <ComponenteTres titulo="Componente três" subtitulo="Texto do componente três" />
            <ComponeteDois />
            <ComponenteUm />
        </>
    )
}

export default App