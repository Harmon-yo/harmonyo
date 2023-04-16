import React from "react";

function Botao(props) {
    return (
        <div className= {"btn-padrao " + props.classButton} onClick={props.onClick}>
        {props.texto}
        </div>
    )
}

export default Botao;