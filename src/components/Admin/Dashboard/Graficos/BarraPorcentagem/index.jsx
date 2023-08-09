import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function BarraPorcentagem(props) {
    return (
        <Box className="mapa-info">
            <Box className="mapa-info-texto-container">
                <Typography className="mapa-info-regiao">{props.nome}</Typography>
                <Typography className="mapa-info-valor">{props.valor}</Typography>
            </Box>
            <Box className="barra-porcentagem-background">
                <Box className="barra-porcentagem-preenchimento" sx={{
                    width: ((props.valor / props.valorTotal) * 100) + "%"
                }}>

                </Box>
            </Box>
        </Box>

    );
}

export default BarraPorcentagem;