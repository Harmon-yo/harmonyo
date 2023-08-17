import { useState, useEffect, useRef, createElement } from 'react';
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";

/* Componentes */
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import Card from "../../../components/Global/Card/index.jsx";
import { Box, Typography } from "@mui/material";
import Metricas from "../../../components/Admin/Dashboard/Graficos/Metricas/index.jsx";
import UsuariosRetidos from "../../../components/Admin/Dashboard/Graficos/Novo/UsuariosRetidos/index.jsx";
import UsuariosCadastrados from "../../../components/Admin/Dashboard/Graficos/Novo/UsuariosCadastrados/index.jsx";
import AulasSemana from '../../../components/Admin/Dashboard/Graficos/Novo/AulaSemana/index.jsx';
import MediaUsuarioSemana from '../../../components/Admin/Dashboard/Graficos/Novo/MediaUsuariosSemana/index.jsx';
import UsuariosRetidosSemana from '../../../components/Admin/Dashboard/Graficos/Novo/UsuariosRetidosSemana/index.jsx';

import Mapa from "../../../components/Admin/Dashboard/MapaBrasil/index.jsx";
import BarraPorcentagemHorizontal from '../../../components/Admin/Dashboard/Graficos/BarraPorcentagemHorizontal/index.jsx';
/* Css */
import "./style.css";

function DashboardAdmin(props) {
    const [erros, setErros] = useState([]);

    /* useEffect(() => {
        if (verificarToken()) {
            navigate(-1);
        }
    }, []); */
    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            nomeGrafico: "usuario",
            valor: 10,
            temInformacaoAdicional: true,
        },
        {
            id: 2,
            nome: "Aulas por aluno",
            nomeGrafico: "renda",
            valor: 0.5,
            temInformacaoAdicional: false
        },
        {
            id: 3,
            nome: "Aulas",
            nomeGrafico: "aulas",
            valor: 5,
            temInformacaoAdicional: false
        },
        {
            id: 4,
            nome: "Avaliações",
            nomeGrafico: "avaliacoes",
            valor: 0,
            temInformacaoAdicional: false
        }
    ]);

    return (
        <EstruturaPaginaUsuario tela="dashboard-admin" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <Metricas metricas={metricas} />
                <Box className="secao secao-usuarios-retidos-cadastrados">
                    <UsuariosRetidos />
                    <UsuariosCadastrados />
                    <Box sx={{
                        width: "30%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                        <UsuariosRetidosSemana />
                        <MediaUsuarioSemana />
                    </Box>
                </Box>
                <Box className="secao secao-aulas">
                    <Box sx={{
                        width: "30%",
                        height: "100%",
                    }}>
                        <AulasSemana />
                    </Box>
                </Box>
                {/* <Box className="secao-mapa-container">
                    <Card className="mapa-card">
                        <Typography className="metrica-titulo">Aulas por região</Typography>
                        <Mapa />
                    </Card>
                </Box>
                <Box className="secao-aula-semana-container">

                </Box>
                <Box className="secao-cadastro-usuario-mensal">
                    <Card className="card-usuarios-retencao">
                        <Typography className="metrica-titulo">Usuários retidos</Typography>
                    </Card>
                    <Card className="card-grafico-doughnut-container">
                        <Typography className="card-titulo">Aulas por instrumentos</Typography>
                        <BarraPorcentagemHorizontal nome="Violão" valorTotal={5} valor={2} />
                        <BarraPorcentagemHorizontal nome="Guitarra" valorTotal={5} valor={1} />

                    </Card>
                </Box> */}
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default DashboardAdmin; 