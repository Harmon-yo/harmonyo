import React from "react";
import "./css/login.css"
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputSenha from "../components/atoms/InputSenha/index.jsx";
import { useStyles } from "./styles/Login.styles";
import Logo from "../components/atoms/Logo"
import axios from "axios";
import request from "../api";

function Login() {

    sessionStorage.ID = "";
    sessionStorage.NOME = "";
    sessionStorage.TOKEN = "";

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);

    const [helperTextEmail, setHelperTextEmail] = useState("");
    const [helperTextSenha, setHelperTextSenha] = useState("");

    function validarCampos() {

        if (email === "" || email === null || senha === "" || senha === null) {

            setErrorEmail(true);
            setHelperTextEmail("Login e/ou senha incorretos !")

            setErrorSenha(true);
            setHelperTextSenha("Login e/ou senha incorretos !")
        }

    }

    async function login() {
        
        let url = "http://localhost:8080/usuarios/login";

        let dadosLogin = {
            email: email,
            senha: senha
        }

        await axios.post(url, dadosLogin)
                        .then((res) => {
                            
                            sessionStorage.ID = res.data.userId;
                            sessionStorage.NOME = res.data.nome;
                            sessionStorage.CATEGORIA = res.data.categoria;
                            sessionStorage.TOKEN = res.data.token;
                            
                            if (res.data.categoria === "Aluno") {
                                window.location = "/alunos/encontrar-professor"
                            }
                            else if (res.data.categoria === "Professor"){
                                window.location = "/professores/dashboard"
                            }
                                
                            
                        })
                        .catch((error) => {
                            let response = error.response;

                            if (response.status === 403) {
                                console.log(response.data.message)

                                setErrorEmail(true);
                                setHelperTextEmail(response.data.message + " !")
                    
                                setErrorSenha(true);
                                setHelperTextSenha(response.data.message  + " !")
                            }
                        })

    
    
    }


    return (
        <>
        <Box sx={useStyles().boxVoltar}>
            <Link to="/" style={{color: 'black', fontWeight: 'bold'}}>{'< Voltar'}</Link>    
        </Box>
        <Box sx={useStyles().background}>
            <Box sx = {useStyles().boxForm}>
            <Logo height = {{xs: '30px', sm: '40px', xl: '40px'}}/>
                <Box sx={useStyles().boxFormInputs}>
                    <TextField id="ipt-email" onChange={(e)=> setEmail(e.target.value)} label="Email" variant="standard" error={errorEmail} helperText = {helperTextEmail}/>
                    <InputSenha id = "ipt-senha" onChange={(e)=> {setSenha(e.target.value)}} error = {errorSenha} helperText = {helperTextSenha} label = {'Senha'}/>
                </Box>
                <Button variant="contained"
                        onClick={login}
                        sx = {useStyles().btnLogin}>
                            Logar
                </Button>  
                <Typography sx={useStyles().txtPossuiConta}>Não Possui Conta? <Link to="/cadastro" style={{marginLeft: '5px',color: 'black', fontWeight: 'bold'}}> Fazer Cadastro</Link></Typography>                       
            </Box>

        </Box>
        </>
    );
}

export default Login; 