import React from "react";

function ComponenteFilho(props){
    return(
        <div className="componente">
            <p className="titulo">Titulos: {props.titulo} </p>
            <p>Cargo: {props.cargo} - {props.children}</p>
        </div>
    )
}

export default ComponenteFilho