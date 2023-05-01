import React from "react";
import "./css/formLoginCadastro.css"
import Logo from "./Logo"
import Botao from "./Botao"

function FormLoginCadastro(props) {
    
    return (
        <>
            <form className={"form " + props.classFrom}>
                <Logo className = "logo-harmonyo"/>
                {props.children}
                <Botao classButton = "btn-cadastrar" texto = {props.txtButton}/>
                <label>{props.txtPossuiConta}<a href={props.href} className={"txt-ahref " + props.classAhref}>{props.txtFazerLogin}</a></label>
            </form>
        </>
    );
}

export default FormLoginCadastro;