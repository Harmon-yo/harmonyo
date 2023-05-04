import React from "react";
import { useState } from "react";
import "./css/Cadastro.modules.css"
import { Link } from "react-router-dom";
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import request from "../api";
import axios from "axios";
import InputSenha from "../components/atoms/InputSenha/index.jsx";

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


    function validarCamposEmBranco() {        

        if (nome === "" || nome === null) {
            setErrorNome(true);
            setHelperTextNome("Campo Obrigatório !")
        }
        else if (nome.length < 4) {
            setErrorNome(true);
            setHelperTextNome("Deve Conter Pelo Menos 4 Caractéres")
        }
        if (email === "" || email === null) {
            setErrorEmail(true);
            setHelperTextEmail("Campo Obrigatório !")
        }
        if (cpf === "" || cpf === null) {
            setErrorCpf(true);
            setHelperTextCpf("Campo Obrigatório !")
        }
        if (cep === "" || cep === null) {
            setErrorCep(true);
            setHelperTextCep("Campo Obrigatório !")
        }
        if (sexo === "" || sexo === null) {
            setErrorSexo(true);
            setHelperTextSexo("Selecione Uma Opção !")
        }
        if (senha === "" || senha === null) {
            setErrorSenha(true);
            console.log(senha)
            setHelperTextSenha("Campo Obrigatório !")
        }
        else if (senha.length < 3) {
            setErrorSenha(true);
            setHelperTextSenha("Deve Conter Pelo Menos 3 Caractéres")
        }
        else if (senha != confirmarSenha) {
            setErrorSenha(true);
            setHelperTextSenha("As senhas devem ser iguais !")
            setErrorConfirmarSenha(true);
            setHelperTextConfirmarSenha("As senhas devem ser iguais !")
        }
        if (confirmarSenha === "" || confirmarSenha === null) {
            setErrorConfirmarSenha(true);
            setHelperTextConfirmarSenha("Campo Obrigatório !")
        }
    }

    async function cadastrar() {

        let urlViaCep = "https://viacep.com.br/ws/" + cep + "/json/";

        let dadosViaCep = {}

        await request(urlViaCep).get()
                            .then((res) => {
                                dadosViaCep = res.data;    
                            })
                            .catch((erro) => {
                                console.log(erro);
                            });


        let url = 'http://localhost:8080/alunos/cadastro'


        console.log(dadosViaCep)

        const dadosUsuario = {
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

        console.log(dadosUsuario)
    
        try {
            const response = await axios.post(url, dadosUsuario);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        
    }

    return (
        <>
        <div className="div-voltar">
        <Link to="/" style={{color: 'black', fontWeight: 'bold', fontSize: '20px'}}>{'< Voltar'}</Link>    
        </div>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                backgroundImage: 'url("/imgs/background-login-cadastro-v2.png")'
            }}>

            <Box sx={{  display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor: '#fcfcfc',
                        borderRadius: '5px',
                        boxShadow: '4px 5px 12px rgba(0, 0, 0, 0.25)',
                        width: '60%',
                        height: '70%'
            }}>
                <Box sx={{  display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            justifyContent: 'space-around',
                            width: '90%',
                            height: '70%'}}>

                    <Box sx={{  display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: '45%',
                            height: '100%'}}>

                        <TextField id="ipt-nome" onChange={(e)=> setNome(e.target.value)}  label="Nome" variant="standard" error={errorNome} helperText = {helperTextNome} />
                        <TextField id="ipt-email" onChange={(e)=> setEmail(e.target.value)} label="Email" variant="standard" error={errorEmail} helperText = {helperTextEmail}/>
                        <InputSenha id = "ipt-senha" onChange={(e)=> {setSenha(e.target.value)}} error = {errorSenha} helperText = {helperTextSenha} label = {'Senha'}/>
                        <InputSenha id = "ipt-confirmar-senha" onChange={(e)=> setConfirmarSenha(e.target.value)} error = {errorConfirmarSenha} helperText = {helperTextConfirmarSenha} label = {'Confirmar Senha'}/>
                    </Box>

                    <Box sx={{  display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            width: '45%',
                            height: '100%'}}>
                        
                        <TextField id="ipt-cpf" onChange={(e)=> setEmail(e.target.value)} label="CPF" variant="standard" error={errorCpf} helperText = {helperTextCpf}/>
                        <TextField id="ipt-cep" onChange={(e)=> setCep(e.target.value)} label="CEP" variant="standard" error={errorCep} helperText = {helperTextCep}/>

                        <FormControl error ={errorSexo} >
                            <FormLabel id="demo-radio-buttons-group-label">Sexo: </FormLabel>
                            <RadioGroup sx={{paddingLeft: '2%'}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="male"
                                name="radio-buttons-group" onChange={(e)=> {setSexo(e.target.value); console.log(e.target.value)}}>
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
                        onClick={validarCamposEmBranco}
                        sx={{
                             width:'40%',
                             backgroundColor: "#29c760 !important",
                             color: "#fff !important",
                             fontWeight: 'bold',
                             fontSize:'16px'
                        }}>
                            Cadastrar
                </Button>  
                <label>Já Possui Conta? <Link to="/login" style={{color: 'black', fontWeight: 'bold'}}> Fazer Login</Link></label>                       
            </Box>    
        </Box>
        {/* <div className="div-voltar">
        <Link to="/" className="link-voltar">{txtVoltar}</Link>      
        </div>
        <div className="background">
            <FormLoginCadastro classFrom = "form-cadastro" 
                                txtPossuiConta = "Já Possui Conta? " 
                                txtFazerLogin = {<Link to="/login" className="link-login">Fazer Login</Link>}
                                txtButton = "Cadastrar"
                                href = "">
            <InputText classInput = "ipt-dados" type = "Text" placeholder = "Nome"/>    
            <InputText classInput = "ipt-dados" type = "Email" placeholder = "Email"/>  
            <InputText classInput = "ipt-dados" type = "Text" placeholder = "CPF"/>
            <div className="form-div-sexo">
                <label>Sexo:</label>
                <div className="form-div-sexo-options">
                    <input type="Radio" value={"Masculino"} name="opcao" id="iptSexoMasc" onClick={selectSexo}/>
                    <label id="lblSexoMasc">Masculino</label>
                </div>
                <div className="form-div-sexo-options">
                    <input type="Radio" value={"Feminino"} name="opcao" id="iptSexoFem" onClick={selectSexo}/>
                    <label id="lblSexoFem">Feminino</label>
                </div>
                <div className="form-div-sexo-options">
                    <input type="Radio" value={"Não Identificado"} name="opcao" id="iptSexoNaoId" onClick={selectSexo}/>
                    <label id="lblSexoNaoId">Prefiro Não Identificar</label>
                </div>
            </div>                              
            <InputText classInput = "ipt-dados" type = "Password" placeholder = "Senha"/>           
            <InputText classInput = "ipt-dados" type = "Password" placeholder = "Confirmar Senha"/>           
            </FormLoginCadastro>
        </div> */}
        </>
    );
}


export default Cadastro;