import React, { useEffect} from 'react';
import EstruturaPaginaUsuario from '../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx';
import { Box } from '@mui/material';
import './style.css';
import Cabecalho from '../../../components/Professor/Aulas/Cabecalho/index.jsx';
import Tabela from '../../../components/Professor/Aulas/Tabela/index.jsx';
import { verificarToken } from "../../../utils";
import { useNavigate } from "react-router-dom";

function Aulas() {

    const navigate = useNavigate();

    useEffect(() => {
        if (verificarToken()) navigate(-1);
    });

    return (
        <EstruturaPaginaUsuario>
            <Box className="pagina-container">
                <Box className="pagina-conteudo">
                    <Cabecalho />
                    <Box className="divider" />
                    <Tabela />
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default Aulas;