import React, { useEffect, useState } from "react";

function EncontrarProfessor() {

  

    useEffect(() => {
        validarToken()
    },[])

    function validarToken() {
        let token = sessionStorage.TOKEN;
        if (token === null || token === "" || token.length < 188) {
            sessionStorage.TOKEN = ""
            window.location = "/login"
        }
    }

   


    return (
        <>
            <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Encontrar Professores</h1>
        </>
    )
}

export default EncontrarProfessor;