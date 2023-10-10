import Card from "../../../Global/Card";
import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    CircularProgress
} from "@mui/material";
import EtapaUm from "../EtapaUm/index.jsx";
import EtapaDois from "../EtapaDois/index.jsx";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import api from "../../../../api";

const requisicaoGet = (url) => {
    return api.get(url, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
};

const requisicaoPost = (url, body) => {
    return api.post(url, body, { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } });
};

const obterDataValida = () => {
    let data = dayjs(new Date());

    let minutos = data.minute().toString();
    if (minutos.length !== 1) minutos = minutos[1];

    if ((!(minutos.includes(0) || minutos.includes(5))) && minutos < 5) {
        data = data.add(5 - minutos, "minute");
    } else if ((!(minutos.includes(0) || minutos.includes(5))) && minutos > 5) {
        data = data.add(10 - minutos, "minute");
    }

    return data;
}

function InformacoesPedido(props) {
    /* Variaveis */
    const { step, steps, setStep } = props.stepsState;

    const { instrumento, setInstrumento } = props.instrumentoState;

    const adicionarErro = props.adicionarErro
    const navigate = useNavigate();

    const [diaEHoraEscolhidos, setDiaEHoraEscolhidos] = useState(obterDataValida)

    const [instrumentosDisponiveis, setInstrumentosDisponiveis] = useState([]);
    const [diasIndisponiveis, setDiasIndisponiveis] = useState([]);
    const [erroHorario, setErroHorario] = useState(false);

    const validarData = (data) => {
        let minutos = data.minute().toString();
        if (minutos.length !== 1) minutos = minutos[1];

        if (!(minutos.includes(0) || minutos.includes(5))) {
            adicionarErro("O horário escolhido não está disponível, o horário foi alterado para o mais próximo possível");
        }
    }

    /* Funções */

    const handleClickDia = (dia) => {
        setDiaEHoraEscolhidos(dia);
    };

    const handleClickHorario = (horario) => {
        horario = horario.second(0).millisecond(0);
        horario = horario.day(diaEHoraEscolhidos.day()).month(diaEHoraEscolhidos.month()).year(diaEHoraEscolhidos.year());

        setDiaEHoraEscolhidos(horario);
    };

    const enviarPedido = () => {
        requisicaoPost("/pedidos", {
            alunoId: sessionStorage.getItem("ID"),
            professorId: new URLSearchParams(window.location.search).get("id"),
            aulaId: instrumento.id,
            dataAula: diaEHoraEscolhidos.format("YYYY-MM-DD HH:mm:ss")
        }).then(() => {
            /* alert("Pedido enviado!"); */
            setStep(3);
        }).catch((error) => {
            console.log(error);
            adicionarErro("Erro ao enviar pedido!");
        });
    }

    const handleClickContinuar = () => {
        if (step === 0) {
            validarData(diaEHoraEscolhidos);
            if (!erroHorario) setStep(step + 1);
        } else if (step === 1) {
            if (instrumento === null) {
                adicionarErro("Escolha um instrumento!");
                return;
            } else {
                setStep(step + 1);

                enviarPedido();
            }
        } else if (step === 3) {
            navigate("/pedidos");
        } else if (step !== 1) {
            setStep(step + 1);
        }

    }

    const definirTextoBotao = (step) => {
        if (step === steps.length - 2) {
            return "Finalizar";
        } else if (step === steps.length) {
            return "Ver meus pedidos";
        } else {
            return "Continuar";
        }
    }
    const textoBotao = definirTextoBotao(step);

    const adicionarAulas = (aulas) => {
        let ltAulas = [];
        let aula;

        for (let i = 0; i < aulas.length; i++) {
            aula = aulas[i];
            
            ltAulas.push({
                id: aula.id,
                nome: aula.instrumento.nome,
                valor: aula.valorAula,
            });
        }

        setInstrumentosDisponiveis(ltAulas);
    };

    const obterDiasIndisponiveis = (pedidos) => {
        let pedido, dataInicial, dataFinal;
        for (let i = 0; i < pedidos.length; i++) {
            pedido = pedidos[i];

            dataInicial = new Date(pedido.dataAula);
            dataInicial.setMinutes(dataInicial.getMinutes() - 55);
            dataFinal = new Date(pedido.dataAula);
            dataFinal.setHours(dataFinal.getHours() + 1);

            setDiasIndisponiveis(diasIndisponiveis => [...diasIndisponiveis, {
                inicio: dataInicial,
                fim: dataFinal
            }]);
        }

    }

    /* Obter Dados */

    useEffect(() => {
        Promise.all([
            requisicaoGet(`/aulas/${props.idProfessor}`),
            requisicaoGet(`pedidos/usuario/${props.idProfessor}/confirmado`),
        ]).then(
            ([responseAulas, responsePedidos]) => {
                const aulas = responseAulas.data;
                const pedidos = responsePedidos.data;

                console.log("Aulas:")
                console.log(aulas)
                console.log("Pedidos:")
                console.log(pedidos)

                adicionarAulas(aulas);

                obterDiasIndisponiveis(pedidos);

            });
    }, []);

    return (<Card className="card-pedido">
        <Stepper activeStep={step} alternativeLabel >
            {
                steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
        </Stepper>
        {
            step !== 2 ?
                <>
                    <Typography className="pedido-titulo">
                        Escolha o dia e o horário que você deseja ter a aula
                    </Typography>
                    <Box className="pedido-form">
                        {
                            step === 0 &&
                            <EtapaUm
                                handleClicks={{
                                    handleClickDia,
                                    handleClickHorario
                                }}
                                diaEHoraEscolhidosState={{ diaEHoraEscolhidos, setDiaEHoraEscolhidos }}
                                errorHorarioState={{ erroHorario, setErroHorario }}
                                diasIndisponiveis={diasIndisponiveis}
                                obterDataValida={obterDataValida}
                            />
                        }
                        {
                            step === 1 &&
                            <EtapaDois instrumentoState={{ instrumento, setInstrumento }} instrumentosDisponiveis={instrumentosDisponiveis} />
                        }
                        {
                            step === 3 &&
                            <Typography className="pedido-texto-finalizado">Aguarde o professor analisar a proposta, se for aceita poderá fazer o pagamento</Typography>
                        }
                    </Box>
                    <Button className="botao-passar-etapa" onClick={handleClickContinuar}>
                        {textoBotao}
                    </Button>
                </>
                : <CircularProgress />
        }
    </Card>);
}

export default InformacoesPedido;