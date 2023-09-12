import { useState, useEffect } from 'react';
import { verificarToken } from "../../../utils/index.js";

/* Componentes */
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import { Box } from "@mui/material";
import Metricas from "../../../components/Admin/Dashboard/Graficos/Metricas/index.jsx";
import UsuariosRetidos from "../../../components/Admin/Dashboard/Graficos/Novo/UsuariosRetidos/index.jsx";
import UsuariosRetidosSemana from '../../../components/Admin/Dashboard/Graficos/Novo/UsuariosRetidosSemana/index.jsx';
import UsuariosCadastrados from "../../../components/Admin/Dashboard/Graficos/Novo/UsuariosCadastrados/index.jsx";
import AulasSemana from '../../../components/Admin/Dashboard/Graficos/Novo/AulaSemana/index.jsx';
import AulasInfo from '../../../components/Admin/Dashboard/Graficos/AulasInfo/index.jsx';
import api from '../../../api.js';

/* import Mapa from "../../../components/Admin/Dashboard/MapaBrasil/index.jsx"; */
/* Css */
import "./style.css";
import { useNavigate } from 'react-router-dom';
import UsuariosCadastradosSemana from '../../../components/Admin/Dashboard/Graficos/Novo/UsuariosCadastradosSemana/index.jsx';

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}

function DashboardAdmin(props) {
    const [erros, setErros] = useState([]);

    const adicionaErro = (erro) => {
        setErros([...erros, erro]);
    }

    const [metricas, setMetricas] = useState([
        {
            id: 1,
            nome: "Usuários",
            endpoint: "/usuarios/quantidade",
            valor: -1,
        },
        {
            id: 2,
            nome: "Aulas por aluno",
            endpoint: "/aulas/quantidade-por-aluno",
            valor: -1,
        },
        {
            id: 3,
            nome: "Aulas",
            endpoint: "/aulas/quantidade",
            valor: -1,
        },
        {
            id: 4,
            nome: "Avaliações",
            endpoint: "",
            valor: -1,
        }
    ]);

    const [valorAulas, setValorAulas] = useState([
        {
            id: 1,
            nome: "Aulas Realizadas",
            endpoint: "/pedidos/quantidade-realizadas-semana-total",
            valor: -1,
        }, {
            id: 2,
            nome: "Aulas Pendentes",
            endpoint: "/pedidos/quantidade-pendentes-semana-total",
            valor: -1,
        }, {
            id: 3,
            nome: "Aulas Canceladas",
            endpoint: "/pedidos/quantidade-canceladas-semana-total",
            valor: -1,
        }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        if (verificarToken()) navigate(-1);

        metricas.forEach(metrica => {
            if (metrica.id !== 4) {
                requisicaoGet(metrica.endpoint).then((resposta) => {
                    setMetricas(metricas => metricas.map(metricaAntiga => {
                        if (metricaAntiga.id === metrica.id) {
                            metricaAntiga.valor = resposta.data;
                        }
                        return metricaAntiga;
                    }));
            }).catch(() => adicionaErro(`Erro ao obter quantidade de ${metrica.nome}`));
            }
        });

        valorAulas.forEach(valorAula => {
            if (valorAula.id !== 4) {
                requisicaoGet(valorAula.endpoint).then((resposta) => {
                    setValorAulas(valorAulas => [...valorAulas.map(valorAulaAntigo => {
                        if (valorAulaAntigo.id === valorAula.id) {
                            valorAulaAntigo.valor = resposta.data;
                        }
                        return valorAulaAntigo;
                    })])
                }).catch(() => adicionaErro(`Erro ao obter quantidade de ${valorAula.nome}`));
            }
        });
    }, []);

    return (
        <EstruturaPaginaUsuario tela="dashboard" errosState={{ erros, setErros }}>
            <Box className="pagina-container">
                <Metricas metricas={metricas} />
                <Box className="secao secao-usuarios-retidos-cadastrados">
                    <UsuariosRetidos />
                    <UsuariosCadastrados adicionaErro={adicionaErro} />
                    <Box sx={{
                        width: "30%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                        <UsuariosRetidosSemana />
                        <UsuariosCadastradosSemana adicionaErro={adicionaErro} />
                    </Box>
                </Box>
                <Box className="secao secao-aulas">
                    <Box sx={{
                        width: "30%",
                        height: "100%",
                    }}>
                        <AulasSemana adicionaErro={adicionaErro}/>
                    </Box>
                    <AulasInfo className="realizadas" titulo="Aulas Realizadas na semana" valor={valorAulas[0].valor} />
                    <AulasInfo className="pendentes" titulo="Aulas Pendentes na semana" valor={valorAulas[1].valor} />
                    <AulasInfo className="canceladas" titulo="Aulas Canceladas na semana" valor={valorAulas[2].valor} />
                </Box>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default DashboardAdmin; 