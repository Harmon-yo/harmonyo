import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import {
    Box
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import InformacoesCompraEUsuario from "../../../components/Aluno/RealizarPedido/InformacoesCompraEUsuario/index.jsx";
import InformacoesPedido from "../../../components/Aluno/RealizarPedido/InformacoesPedido/index.jsx";

import { verificarToken } from "../../../utils/index.js";

const steps = [
    "Escolha o dia",
    "Escolha o instrumento",
    "Proposta Feita"
]

function RealizarPedido() {

    /* Váriaveis */

    const [instrumento, setInstrumento] = useState(null);
    
    const [step, setStep] = useState(0);

    const [erros, setErros] = useState([]);
    const adicionarErro = (erro) => setErros([...erros, erro]);

    const navigate = useNavigate();

    /* Obter dados */

    const idProfessor = new URLSearchParams(window.location.search).get("id");

    useEffect(
        () => {
            if (verificarToken()) navigate(-1);      
        }, []
    );

    return (
        <EstruturaPaginaUsuario tela="realizar-pedido" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <InformacoesCompraEUsuario idProfessor={idProfessor} instrumento={instrumento} />
                <InformacoesPedido stepsState={{ step, steps, setStep}}
                    instrumentoState={{ instrumento, setInstrumento }}
                    idProfessor={idProfessor}
                    adicionarErro={adicionarErro}/>

            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default RealizarPedido;