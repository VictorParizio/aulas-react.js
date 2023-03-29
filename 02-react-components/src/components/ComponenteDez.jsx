import React from "react";

export default (props) => {

    /*const estilo = {
        color: 'white',
        padding: '10px',
        backgroundColor: 'red'
    }*/

    return (
        <div className="componente">
            <p className="titulo">Título: {props.titulo} </p>
            {/* <p style={estilo}>Texto do parágrafo</p> */}
            <p style={{ color: props.corTexto}}>Texto do parágrafo</p>
        </div>
    )
}