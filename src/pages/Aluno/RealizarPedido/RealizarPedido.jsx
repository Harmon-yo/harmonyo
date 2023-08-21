import "./style.css";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import Card from "../../../components/Global/Card/index.jsx";
import {
    Box,
    Avatar,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    Divider
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EtapaUm from "../../../components/Aluno/RealizarPedido/EtapaUm/index.jsx";
import EtapaDois from "../../../components/Aluno/RealizarPedido/EtapaDois/index.jsx";


const steps = [
    "Escolha o dia",
    "Escolha o instrumento",
    "Proposta Feita"
]


const definirTextoBotao = (step) => {
    if (step === steps.length - 2) {
        return "Finalizar";
    } else if (step === steps.length - 1) {
        return "Ver meus pedidos";
    } else {
        return "Continuar";
    }
}

const obterValorInstrumentos = (instrumento) => {
    return "R$ 57,90";
}



function RealizarPedido() {
    const [instrumentos, setInstrumentos] = useState([
        {
            nome: "Violão",
            valor: "R$ 57,90",
        },
        {
            nome: "Guitarra",
            valor: "R$ 57,90",
        }
    ]);
    const [instrumento, setInstrumento] = useState(null);

    const [diaEscolhido, setDiaEscolhido] = useState(null);

    const handleClickDia = (dia) => {
        setDiaEscolhido(dia);
    };

    const [errors, setErrors] = useState({
        dia: false,
        instrumento: false
    });

    const [helperText, setHelperText] = useState({
        dia: "Selecione um dia",
        instrumento: "Selecione um instrumento"
    });

    const [horarioEscolhido, setHorarioEscolhido] = useState(null);

    const handleClickHorario = (horario) => {
        setHorarioEscolhido(horario);
    };

    const [step, setStep] = useState(0);
    const textoBotao = definirTextoBotao(step);

    const navigate = useNavigate();

    const handleClickContinuar = () => {
        if (step === steps.length - 2) {
            if (!instrumento) {
                setErrors({
                    ...errors,
                    instrumento: true
                });
                console.log(errors);
                return;
            }

            return;
        } else if (step === steps.length - 1) {
            navigate("/pedidos");
        } else if (!diaEscolhido) {
            setErrors({
                ...errors,
                dia: true
            });
            console.log(errors);
            return;
        }

        console.log("diaEscolhido", diaEscolhido)


        setStep(step + 1);
    }

    return (
        <EstruturaPaginaUsuario tela="realizar-pedido">
            <Box className="pagina-container">
                <Card className="card-usuario-info">
                    <Box className="usuario-info">
                        <Avatar className="usuario-info-avatar"
                            sx={{ bgcolor: "#099250" }}>G</Avatar>
                        <Box className="duracao-container">
                            <Typography>Duração</Typography>
                            <Typography>1 Hora</Typography>
                        </Box>
                    </Box>
                    <Typography className="nome-usuario">Gustavo Pereira</Typography>
                    <Box className="pedido-info-container">
                        <Box className="item-pedido">
                            <Typography className="item-nome">Violão</Typography>
                            <Typography className="item-valor">R$ 57,90</Typography>
                        </Box>
                        <Divider className="divider" />
                        <Box className="item-pedido">
                            <Typography className="item-nome">Total</Typography>
                            <Typography className="item-valor">R$ 57,90</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card className="card-pedido">
                    <Stepper activeStep={step} alternativeLabel >
                        {
                            steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                    </Stepper>
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
                                error={{
                                    errors,
                                    helperText,
                                }} />
                        }
                        {
                            step === 1 &&
                            <EtapaDois instrumentoState={{ instrumento, setInstrumento }} error={{
                                errors,
                                helperText,
                            }} />
                        }
                        {
                            step === 2 &&
                            <Typography className="pedido-texto-finalizado">Aguarde o professor analisar a proposta, se for aceita poderá fazer o pagamento</Typography>
                        }
                    </Box>
                    <Button className="botao-passar-etapa" onClick={handleClickContinuar}>
                        {textoBotao}
                    </Button>
                </Card>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default RealizarPedido;