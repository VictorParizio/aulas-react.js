import React from "react";
import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props){
    return(
        <div className="componente">
            <p className="titulo">Titulos: {props.titulo} </p>
            <p>Pai</p>
            <ComponenteFilho titulo="Componente Filho" cargo="Administrador">
                João Ribeiro
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Secretária">
                Ana Silva
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="Operador">
                Carlos Santos
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai