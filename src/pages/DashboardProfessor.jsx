import React, { useEffect, useState } from "react";

function DashboardProfessor() {
    
    useEffect(() => {
        validarToken()
    },[])

    function validarToken() {
        
        let token = sessionStorage.TOKEN;
        
        if (token === null || token === "" || token.length < 186) {            
            sessionStorage.TOKEN = ""
            window.location = "/login"
        }
    }

    return (
        <>
            <h1>Olá {sessionStorage.CATEGORIA}(a) {sessionStorage.NOME} - Dashboard Professor</h1>
        </>
    )
}

export default DashboardProfessor;