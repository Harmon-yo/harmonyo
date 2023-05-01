/* import React from "react";
import "./css/cadastro.css"
import "./css/main.css"
import FormLoginCadastro from "../components/FormLoginCadastro";
import InputText from "../components/InputText"
import { Link } from "react-router-dom";

function Cadastro(props) {

    let txtVoltar = "< Voltar"

    function selectSexo() {;
        
        if (document.getElementById('iptSexoMasc').checked) {

            document.getElementById('lblSexoMasc').innerHTML = "<b>Masculino</b>";
            document.getElementById('lblSexoFem').innerHTML = "Feminino";
            document.getElementById('lblSexoNaoId').innerHTML = "Prefiro Não Identificar";
        }
        else if (document.getElementById('iptSexoFem').checked) {
            document.getElementById('lblSexoMasc').innerHTML = "Masculino";
            document.getElementById('lblSexoFem').innerHTML = "<b>Feminino</b>";
            document.getElementById('lblSexoNaoId').innerHTML = "Prefiro Não Identificar";
        }
        else {
            document.getElementById('lblSexoMasc').innerHTML = "Masculino";
            document.getElementById('lblSexoFem').innerHTML = "Feminino";
            document.getElementById('lblSexoNaoId').innerHTML = "<b>Prefiro Não Identificar</b>";
        }

    }
    
    return (
        <>
        <div className="div-voltar">
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
        </div>
        </>
    );
}

export default Cadastro; */