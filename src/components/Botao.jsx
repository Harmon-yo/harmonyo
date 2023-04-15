import React from "react";

function Botao(props) {
    return (
        <div className= {"btn-padrao " + props.classButton}>
        {props.texto}
        </div>
    )
}

export default Botao;