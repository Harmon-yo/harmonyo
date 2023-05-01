/* import React from "react";
import "./css/main.css"
import "./css/login.css"
import FormLoginCadastro from "../components/FormLoginCadastro";
import InputText from "../components/InputText"
import { Link } from "react-router-dom";

function Login(props) {

    let txtVoltar = "< Voltar";

    return (
        <>
        <div className="div-voltar">
        <Link to="/" className="link-voltar">{txtVoltar}</Link>     
        </div>
        <div className="background">
            <FormLoginCadastro classFrom = "form-login" 
                                txtPossuiConta = "Não Possui Conta? " 
                                txtFazerLogin = {<Link to="/cadastro" className="link-cadastro">Fazer Cadastro</Link>}
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

export default Login; */