import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function InformacaoAdicionalGrafico(props) {
    return (
        <Box className="taxa-container">
            <Typography className="quantidade-usuario-titulo">
               {/*  <FiberManualRecordIcon sx={{
                    fontSize: "var(----fonte-h6)"
                }} /> */}
                {props.nome}
            </Typography>
            <Typography className="quantidade-usuario-valor">{props.valor} ({(props.valor / props.valorTotal) * 100}%)</Typography>
        </Box>
    );
}

export default InformacaoAdicionalGrafico;