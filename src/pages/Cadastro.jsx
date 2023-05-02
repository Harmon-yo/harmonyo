import React from "react";
import "./css/cadastro.css"
import { Link } from "react-router-dom";
import { Box, Button, TextField, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio  } from "@mui/material";
import request from "../api";
import axios from "axios";

function Cadastro(props) {
    
    async function cadastrar() {

        let cep = document.getElementById('ipt-cep').value;

        let urlViaCep = "https://viacep.com.br/ws/" + cep + "/json/";

        let dadosViaCep = {}

        await request(urlViaCep).get()
                            .then((res) => {
                                dadosViaCep = res.data;    
                            })
                            .catch((erro) => {
                                console.log(erro);
                            });

                            
        let nome = document.getElementById('ipt-nome').value;
        let email = document.getElementById('ipt-email').value;
        let cpf = document.getElementById('ipt-cpf').value;
        let sexo = 'Masculino'
        let senha = document.getElementById('ipt-senha').value;

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
        <div 
            style={{
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
                        width: '30%',
                        height: '90%'
            }}>
                <Box sx={{  display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            width: '60%'}}>

                    <TextField id="ipt-nome" label="Nome" variant="standard" />
                    <TextField id="ipt-email" label="Email" variant="standard" />
                    <TextField id="ipt-cpf" label="CPF" variant="standard" />
                    <TextField id="ipt-cep" label="CEP" variant="standard" />
                    <FormControl sx={{marginTop: '5%'}}>
                    <FormLabel id="demo-radio-buttons-group-label">Sexo: </FormLabel>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="male"
                        name="radio-buttons-group">
                        <FormControlLabel value="male" control={<Radio size="string"/>} label="Masculino" />
                        <FormControlLabel value="female" control={<Radio size="string"/>} label="Feminino" />
                        <FormControlLabel value="other" control={<Radio size="string"/>} label="Outros" />
                    </RadioGroup>
                    </FormControl>
                    <TextField id="ipt-senha" label="Senha" variant="standard" />  
                    <TextField id="ipt-confirmar-senha" label="Confirmar Senha" variant="standard" /> 
  
                </Box>
                <Button variant="contained"
                        onClick={cadastrar}
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
        </div>
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