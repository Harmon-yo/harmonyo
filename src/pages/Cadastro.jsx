import React from "react";
import { useState } from "react";
import "./css/Cadastro.modules.css"
import { Link } from "react-router-dom";
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import request from "../api";
import axios from "axios";
import InputSenha from "../components/atoms/InputSenha/index.jsx";
import InputMask from 'react-input-mask';
import { useStyles } from "./styles/Cadastro.styles";

function Cadastro(props) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [sexo, setSexo] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [cep, setCep] = useState("");

    const [errorNome, setErrorNome] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorCpf, setErrorCpf] = useState(false);
    const [errorSexo, setErrorSexo] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorConfirmarSenha, setErrorConfirmarSenha] = useState(false);
    const [errorCep, setErrorCep] = useState(false);

    const [helperTextNome, setHelperTextNome] = useState("");
    const [helperTextEmail, setHelperTextEmail] = useState("");
    const [helperTextCpf, setHelperTextCpf] = useState("");
    const [helperTextSexo, setHelperTextSexo] = useState("");
    const [helperTextSenha, setHelperTextSenha] = useState("");
    const [helperTextConfirmarSenha, setHelperTextConfirmarSenha] = useState("");
    const [helperTextCep, setHelperTextCep] = useState("");

    function limparMsgErros() {
        
        setErrorNome("")
        setErrorEmail("")
        setErrorCpf("")
        setErrorSexo("")
        setErrorSenha("")
        setErrorConfirmarSenha("")
        setErrorCep("")
    
        setHelperTextNome("")
        setHelperTextEmail("")
        setHelperTextCpf("")
        setHelperTextSexo("")
        setHelperTextSenha("")
        setHelperTextConfirmarSenha("")
        setHelperTextCep("")

    }

    function validarCampos() {        

        limparMsgErros()

        let camposOk = true;

        if (nome === "" || nome === null) {
            setErrorNome(true);
            setHelperTextNome("Campo Obrigatório !")
            camposOk = false;
        }
        else if (nome.length < 4) {
            setErrorNome(true);
            setHelperTextNome("Deve Conter Pelo Menos 4 Caractéres")
        }
        if (email === "" || email === null) {
            setErrorEmail(true);
            setHelperTextEmail("Campo Obrigatório !")
            camposOk = false;
        }
        if (cpf === "" || cpf === null) {
            setErrorCpf(true);
            setHelperTextCpf("Campo Obrigatório !")
            camposOk = false;
        }
        if (cep === "" || cep === null) {
            setErrorCep(true);
            setHelperTextCep("Campo Obrigatório !")
            camposOk = false;
        }
        if (sexo === "" || sexo === null) {
            setErrorSexo(true);
            setHelperTextSexo("Selecione Uma Opção !")
            camposOk = false;
        }
        if (senha === "" || senha === null) {
            setErrorSenha(true);
            console.log(senha)
            setHelperTextSenha("Campo Obrigatório !")
            camposOk = false;
        }
        else if (senha.length < 3) {
            setErrorSenha(true);
            setHelperTextSenha("Deve Conter Pelo Menos 3 Caractéres")
            camposOk = false;
        }
        else if (senha !== confirmarSenha) {
            setErrorSenha(true);
            setHelperTextSenha("As senhas devem ser iguais !")
            setErrorConfirmarSenha(true);
            setHelperTextConfirmarSenha("As senhas devem ser iguais !")
            camposOk = false;
        }
        if (confirmarSenha === "" || confirmarSenha === null) {
            setErrorConfirmarSenha(true);
            setHelperTextConfirmarSenha("Campo Obrigatório !")
            camposOk = false;
        }

        return camposOk;
    }

    async function buscarDadosEndereco() {
               
        let urlViaCep = "https://viacep.com.br/ws/" + cep + "/json/"

        let dadosViaCep = {}

        await request(urlViaCep).get()
                            .then((res) => {

                                if (res.data.erro) {
                                    dadosViaCep = null;
                                }
                                else {
                                    dadosViaCep = res.data;
                                }

                            })
                            .catch((error) => {
                                console.log(error);

                            })
        return dadosViaCep;                    
    }

    async function cadastrar() {


        if (validarCampos()) {
            let dadosViaCep = await buscarDadosEndereco();

            if (dadosViaCep === null) {
                setErrorCep(true);
                setHelperTextCep("CEP Inválido !")
            }
            else {
                
                let url = 'http://localhost:8080/alunos/cadastro'
        
                let dadosUsuario = {
                    nome: nome,
                    email: email,
                    cpf: cpf,
                    sexo: sexo,
                    senha: senha,
                    endereco: {
                        logradouro: dadosViaCep.logradouro,
                        numero: dadosViaCep.complemento,
                        complemento: "",
                        cidade: dadosViaCep.localidade,
                        bairro: dadosViaCep.bairro,
                        estado: dadosViaCep.uf,
                        cep: dadosViaCep.cep
                    },
                }

                await axios.post(url, dadosUsuario)
                            .then((res) => {
                                console.log(res.data)
                            })
                            .catch((error) => {

                                let listaErros = error.response.data.errors

                                console.log(listaErros)
                                
                                listaErros.map((erro) => {

                                    if (erro.codes[1] === "Size.nome") {

                                            console.log(erro.codes[1])
                                            console.log(erro.defaultMessage)

                                            setErrorNome(true);
                                            setHelperTextNome("Deve conter pelo menos 4 caractéres !")
                                    }

                                    if (erro.code === "Email") {

                                        console.log(erro.code)
                                        console.log(erro.defaultMessage)

                                        setErrorEmail(true);
                                        setHelperTextEmail("Email Inválido !")
                                    }

                                    if (erro.codes[1] === "Size.senha") {

                                        console.log(erro.codes[1])
                                        console.log(erro.defaultMessage)

                                        setErrorSenha(true);
                                        setHelperTextSenha("Deve Conter Pelo Menos 3 Caractéres !")
                                    }

                                    if (erro.code === "CPF") {

                                        console.log(erro.code)
                                        console.log(erro.defaultMessage)

                                        setErrorCpf(true);
                                        setHelperTextCpf("CPF Inválido !")
                                    }

                                    if (erro.code === "CEP") {

                                        console.log(erro.code)
                                        console.log(erro.defaultMessage)

                                        setErrorCep(true);
                                        setHelperTextCep("CEP Inválido !")
                                    }
                                    
                                    if (erro.code === "Sexo") {

                                        console.log(erro.code)
                                        console.log(erro.defaultMessage)

                                        setErrorSexo(true);
                                        setHelperTextSexo("Sexo Inválido! Selecione Uma Opção !")
                                    }

                                })
                            })
            }
        }
    }

    return (
        <>
        <Box sx = {useStyles().boxVoltar}>
        <Link to="/" style={{color: 'black', fontWeight: 'bold'}}>{'< Voltar'}</Link>    
        </Box>
        <Box sx = {useStyles().background}>

            <Box sx = {useStyles().boxForm}>

                <Box sx = {useStyles().boxFormInputs}>

                    <Box sx = {useStyles().boxInputs}>

                        <TextField id="ipt-nome" onChange={(e)=> setNome(e.target.value)}  label="Nome" variant="standard" error={errorNome} helperText = {helperTextNome} />
                        <TextField id="ipt-email" onChange={(e)=> setEmail(e.target.value)} label="Email" variant="standard" error={errorEmail} helperText = {helperTextEmail}/>
                        <InputSenha id = "ipt-senha" onChange={(e)=> {setSenha(e.target.value)}} error = {errorSenha} helperText = {helperTextSenha} label = {'Senha'}/>
                        <InputSenha id = "ipt-confirmar-senha" onChange={(e)=> setConfirmarSenha(e.target.value)} error = {errorConfirmarSenha} helperText = {helperTextConfirmarSenha} label = {'Confirmar Senha'}/>
                    </Box>

                    <Box sx={useStyles().boxInputs}>

                        <InputMask mask= '999.999.999-99' value={cpf} onChange={(e)=> setCpf(e.target.value)}>
                            {() => (
                                <TextField id="ipt-cpf" label="CPF" variant="standard" error={errorCpf} helperText = {helperTextCpf}/>
                            )}
                        </InputMask>

                        <InputMask mask= '99999-999' value={cep} onChange={(e)=> setCep(e.target.value)}>
                            {() => (
                                <TextField id="ipt-cep" label="CEP" variant="standard" error={errorCep} helperText = {helperTextCep}/>
                            )}
                        </InputMask>

                        <FormControl error ={errorSexo} >
                            <FormLabel id="demo-radio-buttons-group-label">Sexo: </FormLabel>
                            <RadioGroup sx={{paddingLeft: '2%'}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name="radio-buttons-group" onChange={(e)=> setSexo(e.target.value)}>
                                <FormControlLabel value="Masculino"  control={<Radio size="16px"/>} label="Masculino" />
                                <FormControlLabel value="Feminino" control={<Radio size="16px"/>} label="Feminino" />
                                <FormControlLabel value="Outros" control={<Radio size="16px"/>} label="Outros" />
                            </RadioGroup>
                            {errorSexo? <Typography sx={{
                                            fontSize: '12px',
                                            color: '#d32f2f'}} >{helperTextSexo}</Typography> : null }
                        </FormControl>
                    </Box>      
                </Box>
                <Button variant="contained"
                        onClick={cadastrar}
                        sx = {useStyles().btnCadastrar}>
                            Cadastrar
                </Button>  
                <Typography sx={useStyles().txtPossuiConta}>Já Possui Conta? <Link to="/login" style={{color: 'black', fontWeight: 'bold'}}> Fazer Login</Link></Typography>                       
            </Box>    
        </Box>
        </>
    );
}


export default Cadastro;