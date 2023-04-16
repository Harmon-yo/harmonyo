import React from "react";
import "./css/navBar.css"
import Botao from "./Botao";
import Logo from "./Logo";
import "./css/botao.css"
import { Link, } from "react-router-dom";


function Navbar() {

    function chamaTelaLogin() {
        window.location = "/login"
    }

    function chamaTelaCadastro() {
        window.location = "/cadastro"
    }

    return (

        <>
            <nav className="nav-bar">
                <div className="nav-bar-menu">
                    <Logo />
                    <div className="nav-bar-menu-options">
                        <label>Início</label>
                        <label>Como Funciona</label>
                        <label>Contato</label>
                    </div>
                    <div className="nav-bar-menu-buttons">
                        <Botao texto = "Login" classButton ="btn-login" onClick = {chamaTelaLogin}/>
                        <Botao texto = "Cadastro" classButton ="btn-cadastro" onClick = {chamaTelaCadastro}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;