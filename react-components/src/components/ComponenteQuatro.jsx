import React from "react";

const ComponenteQuatro = (props) => {
    return (
        <div className="componente">
            <p>Título: {props.titulo}</p>
            {props.children}
        </div>
    )
}

export default ComponenteQuatro