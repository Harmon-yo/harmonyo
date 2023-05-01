import React from "react";
import "./css/contatoIconText.css"

function ContatoIconText(props) {
    
    return (
        <>
        <div className={"div-icone-texto-contato " + props.classContatoIconeText }>
            <img src={props.enderecoIcone} alt="" />
            <label>{props.textoContato}</label>
        </div>
        </>
    );
}

export default ContatoIconText;