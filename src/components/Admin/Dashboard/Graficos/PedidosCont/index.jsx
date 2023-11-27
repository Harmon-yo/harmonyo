import {
    useEffect,
    useState
} from "react";
import {
    Box
} from "@mui/material";
import Pedidos from "../Pedidos/index.jsx";
import TiposPedidos from "../TiposPedidos/index.jsx";
import api from "../../../../../api.js";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
}


const obterValoresGrafico = async (dataInicial, dataFinal, adicionaAviso) => {
    const params = `dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
    const endpoints = [
        {
            metrica: "Aulas Realizadas",
            endpoint: `/pedidos/quantidade-aulas-hist?${params}&status=1`
        },
        {
            metrica: "Aulas Confirmadas",
            endpoint: `/pedidos/quantidade-aulas-hist?${params}&status=2`
        },
        {
            metrica: "Aulas Pendentes",
            endpoint: `/pedidos/quantidade-aulas-hist?${params}&status=5`
        },
        {
            metrica: "Aulas Canceladas",
            endpoint: `/pedidos/quantidade-aulas-hist?${params}&status=6`
        },
        {
            metrica: "Aulas Recusadas",
            endpoint: `/pedidos/quantidade-aulas-hist?${params}&status=7`
        }
    ]

    const promessas = Promise.all(endpoints.map((endpoint) => requisicaoGet(endpoint.endpoint)));

    return await promessas.then(([aulasRealizadasRespose, aulasConfirmadasResponse, aulasPendentesResponse, aulasCanceladasResponse, aulasRecusadasResponse]) => {
        const aulasRealizadas = aulasRealizadasRespose.data;
        const aulasConfirmadas = aulasConfirmadasResponse.data;
        const aulasPendentes = aulasPendentesResponse.data;
        const aulasCanceladas = aulasCanceladasResponse.data;
        const aulasRecusadas = aulasRecusadasResponse.data;

        return {
            aulasRealizadas: aulasRealizadas,
            aulasConfirmadas: aulasConfirmadas,
            aulasPendentes: aulasPendentes,
            aulasCanceladas: aulasCanceladas,
            aulasRecusadas: aulasRecusadas,
        };

    }).catch((err) => {
        adicionaAviso({
            tipo: "erro",
            mensagem: `Erro ao obter valores do histórico de pedidos`,
        });

        console.log("Erro Histórico de Pedidos: ")
        console.log(err)

        return {
            aulasRealizadas: [],
            aulasConfirmadas: [],
            aulasPendentes: [],
            aulasCanceladas: [],
            aulasRecusadas: [],
        }
    });

}

function PedidosCont(props) {
    const [valores, setValores] = useState([]);

    const dataInicial = props.dataInicial.format("YYYY-MM-DD");
    const dataFinal = props.dataFinal.format("YYYY-MM-DD");
    const adicionaAviso = props.adicionaAviso;
    const labelsHist = props.labelsHist;

    useEffect(() => {
        obterValoresGrafico(dataInicial, dataFinal, adicionaAviso)
            .then((valores) => {
                setValores(valores);
            });
    }, [dataInicial, dataFinal]);

    return (
        <Box className="container-pedidos">
            <Pedidos valores={valores} labelsHist={labelsHist} />
            <TiposPedidos valores={valores} />
        </Box>
    );
}

export default PedidosCont;