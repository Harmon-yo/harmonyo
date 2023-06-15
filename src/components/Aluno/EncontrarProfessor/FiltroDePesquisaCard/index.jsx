import React from "react";
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Rating } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Card from "../../../Global/Card";
import "./style.css";

function FiltroDePesquisaCard(props) {
    const [precoMinimo, setPrecoMinimo] = React.useState(0);
    const [precoMaximo, setPrecoMaximo] = React.useState(100);
    const [distanciaMinima, setDistanciaMinima] = React.useState(0);
    const [distanciaMaxima, setDistanciaMaxima] = React.useState(100);
    const [preco, setPreco] = React.useState([precoMinimo, precoMaximo]);
    const [distancia, setDistancia] = React.useState([distanciaMinima, distanciaMaxima]);
    const [avaliacao, setAvaliacao] = React.useState(5);
    const [buscandoProfessor, setBuscandoProfessor] = React.useState(false);
    const [disponibilidade, setDisponibilidade] = React.useState({
        manha: false,
        tarde: false,
        noite: false
    });

    function handleClickFiltro() {
        setBuscandoProfessor(true);

        let parametros = {
            preco: preco,
            distancia: distancia,
            avaliacao: avaliacao,
            //disponibilidade: ["Manhã", "Tarde", "Noite"]
        }

        mapearFiltro(parametros).then(
            setBuscandoProfessor(false)
        );
    }

    function mapearFiltro(filtroOpcao) {
        let parametros = "";

        for (let i = 0; i < Object.keys(filtroOpcao).length; i++) {
            let valor = filtroOpcao[Object.keys(filtroOpcao)[i]];

            let chave = Object.keys(filtroOpcao)[i];
            let operacao = definirTipoPesquisa(Object.keys(filtroOpcao)[i]);
            if (chave !== "disponibilidade") {
                if (Array.isArray(valor)) {
                    parametros += `${chave}${operacao}${valor[0]}`;
                    for (let j = 1; j < valor.length; j++) {
                        parametros += `+${valor[j]}`;
                    }
                } else {
                    parametros += `${chave}${operacao}${valor}`;
                }

                if (i < Object.keys(filtroOpcao).length - 1) {
                    parametros += ",";
                }
            }


        }

        console.log("Parametros: " + parametros);
        return new Promise((resolve) => {
            props.buscarProfessores(parametros).then(resolve());
        });
    }

    function definirTipoPesquisa(tipo) {
        switch (tipo) {
            case "preco": return "><";
            case "distancia": return "><";
            case "avaliacao": return ">:";
            case "instrumentos": return "=";
            /* case "disponibilidade": return "="; */
        }
    }

    function textoPreco(valor) {
        return `R$${valor}`;
    }

    function textoDistancia(valor) {
        return `${valor} Km`;
    }

    const handleChangePreco = (event, novoValor, activeThumb) => {
        if (!Array.isArray(novoValor)) {
            return;
        }

        if (activeThumb === 0) {
            setPreco([Math.min(novoValor[0], preco[1] - precoMinimo), preco[1]]);
        } else {
            setPreco([preco[0], Math.max(novoValor[1], preco[0] + precoMinimo)]);
        }
    };

    const handleChangeDistancia = (event, novoValor, activeThumb) => {
        if (!Array.isArray(novoValor)) {
            return;
        }

        if (activeThumb === 0) {
            setDistancia([Math.min(novoValor[0], distancia[1] - distanciaMinima), distancia[1]]);
        } else {
            setDistancia([distancia[0], Math.max(novoValor[1], distancia[0] + distanciaMinima)]);
        }
    };


    const handleChangeDisponibilidade = (event) => {
        setDisponibilidade({ ...disponibilidade, [event.target.name]: event.target.checked });
    };

    return (
        <Card className="filtro-card">
            <Box className="filtro-card-titulo">
                <Typography className="encontrar-professor-titulo" sx={{ marginBottom: "0 !important" }}>
                    Filtro
                </Typography>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo">
                    Preço
                </Typography>
                <Box className="filtro-slider-container">
                    <Slider
                        getAriaLabel={() => 'Preço mínimo'}
                        value={preco}
                        onChange={handleChangePreco}
                        valueLabelDisplay="auto"
                        getAriaValueText={textoPreco}
                        disableSwap
                        min={precoMinimo}
                        max={precoMaximo}
                        sx={{ color: "black", marginBottom: "4px" }}
                    />
                    <Box className="filtro-slider-min-max-container">
                        <Typography className="filtro-slider-minimo" variant="subtitle2">
                            R$ {precoMinimo}
                        </Typography>
                        <Typography className="filtro-slider-maximo" variant="subtitle2">
                            R$ {precoMaximo}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="filtro-disponibilidade-container">
                <Typography className="filtro-titulo">
                    Disponibilidade
                </Typography>
                <Box className="filtro-disponibilidade-check-container">
                    <FormGroup>
                        <FormControlLabel name="manha" checked={disponibilidade.manha} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Manhã</Typography>} />
                        <FormControlLabel name="tarde" checked={disponibilidade.tarde} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Tarde</Typography>} />
                        <FormControlLabel name="noite" checked={disponibilidade.noite} onChange={handleChangeDisponibilidade} control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Noite</Typography>} />
                    </FormGroup>
                </Box>
            </Box>
            <Box className="filtro-avaliacao-container">
                <Typography className="filtro-titulo">
                    Avaliação
                </Typography>
                <Box className="filtro-avaliacao-rating-container">
                    <Typography className="filtro-avaliacao-texto">{avaliacao}</Typography>
                    <Rating name="half-rating" value={avaliacao} defaultValue={5} precision={0.5} onChange={(event, novoValor) => {
                        setAvaliacao(novoValor);
                    }} />
                </Box>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo">
                    Distância
                </Typography>
                <Box className="filtro-slider-container">
                    <Slider
                        getAriaLabel={() => 'Distância mínima'}
                        value={distancia}
                        onChange={handleChangeDistancia}
                        valueLabelDisplay="auto"
                        getAriaValueText={textoDistancia}
                        disableSwap
                        min={distanciaMinima}
                        max={distanciaMaxima}
                        sx={{ color: "black", marginBottom: "4px" }}
                    />
                    <Box className="filtro-slider-min-max-container">
                        <Typography className="filtro-slider-minimo" variant="subtitle2">
                            {distanciaMinima} Km
                        </Typography>
                        <Typography className="filtro-slider-maximo" variant="subtitle2">
                            {distanciaMaxima} Km
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <LoadingButton loading={buscandoProfessor} onClick={handleClickFiltro} className="filtro-botao">
                <Typography className="loading-text">Filtrar</Typography>
            </LoadingButton>
        </Card>
    );
}

export default FiltroDePesquisaCard;