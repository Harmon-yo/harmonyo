import React from "react";
import "./css/navBar.css"
import Botao from "./Botao";
import Logo from "./Logo";
import "./css/botao.css"

function Navbar() {

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
                        <Botao texto = "Login" classButton ="btn-login"/>
                        <Botao texto = "Cadastro" classButton ="btn-cadastro"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;