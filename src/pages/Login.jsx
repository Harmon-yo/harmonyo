import React from "react";
import "./css/login.css"
import FormLoginCadastro from "../components/FormLoginCadastro";
import InputText from "../components/InputText"

function Login(props) {

    let txtVoltar = "< Voltar";

    return (
        <>
        <div className="div-voltar">
        <a href="">{txtVoltar}</a>       
        </div>
        <div className="background">
            <FormLoginCadastro classFrom = "form-login" 
                                txtPossuiConta = "Não Possui Conta? " 
                                txtFazerLogin = "Fazer Cadastro"
                                txtButton = "Login"
                                href = "">
            <InputText classInput = "ipt-login" type = "Email" placeholder = "Email"/>                            
            <InputText classInput = "ipt-login" type = "Password" placeholder = "Senha"/>
            <a href="" className="txt-redefinir-senha">Esqueceu a senha ? Redefinir Senha</a>                   
            </FormLoginCadastro>
        </div>
        </>
    );
}

export default Login;