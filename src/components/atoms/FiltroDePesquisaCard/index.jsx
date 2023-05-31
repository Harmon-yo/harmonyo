import React from "react";
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox, Rating } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import Card from "../Card";
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

    function handleClickFiltro() {
        setBuscandoProfessor(true);

        let parametros = {
            preco: preco,
            distancia: distancia,
            avaliacao: avaliacao,
            //disponibilidade: ["Manhã", "Tarde", "Noite"]
        }

        props.buscarProfessor(parametros);
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

    return (
        <Card className="filtro-card">
            <Box className="filtro-card-titulo">
                <Typography className="encontrar-professor-titulo" variant="h5">
                    Filtro
                </Typography>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo" variant="subtitle1">
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
                        sx={{ color: "black" }}
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
                <Typography className="filtro-titulo" variant="subtitle1">
                    Disponibilidade
                </Typography>
                <Box className="filtro-disponibilidade-check-container">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Manhã</Typography>} />
                        <FormControlLabel control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Tarde</Typography>} />
                        <FormControlLabel control={<Checkbox />} label={<Typography className="filtro-disponibilidade-texto">Noite</Typography>} />
                    </FormGroup>
                </Box>
            </Box>
            <Box className="filtro-avaliacao-container">
                <Typography className="filtro-titulo" variant="subtitle1">
                    Avaliação
                </Typography>
                <Box className="filtro-avaliacao-rating-container">
                    <Typography className="filtro-avaliacao-texto" variant="subtitle2">{avaliacao}</Typography>
                    <Rating name="half-rating" value={avaliacao} defaultValue={5} precision={0.5} onChange={(event, novoValor) => {
                        setAvaliacao(novoValor);
                    }} />
                </Box>
            </Box>
            <Box className="filtro-slider-container">
                <Typography className="filtro-titulo" variant="subtitle1">
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
                        sx={{ color: "black" }}
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