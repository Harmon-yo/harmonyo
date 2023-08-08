import { useState, useEffect, useRef, createElement } from 'react';
import api from "../../../api.js";
import { verificarToken } from "../../../utils/index.js";

/* Componentes */
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import Card from "../../../components/Global/Card/index.jsx";
import { Box, Typography } from "@mui/material";
import Metrica from "../../../components/Admin/Dashboard/Graficos/Metrica/index.jsx";
import Graficos from "../../../components/Admin/Dashboard/Graficos/index.jsx"
import Mapa from "../../../components/Admin/Dashboard/MapaBrasil/index.jsx";
import GraficoDoughnut from "../../../components/Admin/Dashboard/Graficos/GraficoDoughnut/index.jsx";

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
            valor: 0,
            temInformacaoAdicional: true,
        },
        {
            id: 2,
            nome: "Renda",
            nomeGrafico: "renda",
            valor: 0,
            temInformacaoAdicional: false
        },
        {
            id: 3,
            nome: "Aulas",
            nomeGrafico: "aulas",
            valor: 0,
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
    const [idMetricaSelecionada, setIdMetricaSelecionada] = useState(1);
    
    const metricaSelecionada = metricas.find((metrica) => metrica.id === idMetricaSelecionada);

    const handleClickMetrica = (id) => {
        setIdMetricaSelecionada(id);
    };

    return (
        <EstruturaPaginaUsuario tela="dashboard-admin" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <Box className="metricas-container">
                    {
                        metricas.map((metrica) =>
                            <Metrica id={metrica.id} nome={metrica.nome} valor={metrica.valor} handleClickMetrica={handleClickMetrica} idMetricaSelecionada={idMetricaSelecionada}/>
                            )
                    }
                </Box>
                <Box className="informacoes-adicionais-container">
                    <Card className="card-grafico-container">
                        <Typography className="grafico-titulo">Conversão</Typography>
                        <Graficos barra metricaSelecionada={idMetricaSelecionada} temInformacaoAdicional={metricaSelecionada}/>

                    </Card>
                    {/* <Box className="metricas-adicionais-container">
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">Usuários convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">professores convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                        <Card className="metrica-adicional-card">
                            <Typography className="metrica-titulo">Alunos convertidos</Typography>
                            <Typography className="metrica-valor">50%</Typography>
                        </Card>
                    </Box> */}
                    <Card className="card-grafico-doughnut-container">
                        <Typography className="grafico-titulo">Informações adicionais</Typography>
                        <Graficos doughnut temInformacaoAdicional={metricaSelecionada}/>
                    </Card>
                </Box>
                <Box className="mapa-container">
                    <Card className="mapa-card">
                        <Typography className="metrica-titulo">Mapa</Typography>
                        <Mapa />
                    </Card>
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default DashboardAdmin; 