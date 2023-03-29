import React from "react";

export default (props) => {

    function executar() {
        props.funcao('Valor: ' + Math.random(), "Outro Parâmetro")
    }

    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo} </p>
            <button onClick={executar}>Executar</button>
        </div>
    )
}