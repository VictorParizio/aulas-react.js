import React from 'react'

export default function (props) {

    function condicao() {
        /*
        if(props.valor >= 10){
            return <p>O valor é igual ou maior que 10</p>
        } else {
            return <p>O valor é menor que 10</p>
        }
        */

        switch (props.valor) {
            case "João":
                return <p>É o meu nome</p>
                break;

            case "Ana":
                return <p>É o nome da minha irmã</p>
                break;

            default:
                return <p>Desconheço quem tenha esse nome</p>
                break;
        }
    }

    return (
        <div className="componente">
            <p className="titulo">Titulo: {props.titulo}</p>
            {condicao()}
        </div>
    )
}