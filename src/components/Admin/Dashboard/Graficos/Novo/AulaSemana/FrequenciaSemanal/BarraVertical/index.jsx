import { Box, Tooltip, Typography } from "@mui/material";
import './style.css';
import { useEffect } from "react";


function BarraVertical(props) {
    let valoresTotal = props.valores.reduce((a, b) => a + b, 0);

    const porcentagemAulasRealizadas = `${100 - ((props.valores[0] / valoresTotal) * 100)}%`;
    const porcentagemAulasPendentes = `${100 - ((props.valores[1] / valoresTotal) * 100)}%`;
    const porcentagemAulasCanceladas = `${100 - ((props.valores[2] / valoresTotal) * 100)}%`;

    const propriedadeCss = `linear-gradient(180deg, #00a65a 0%, #00a65a ${porcentagemAulasRealizadas},
    #f39c12 ${porcentagemAulasRealizadas}, #f39c12 ${porcentagemAulasPendentes},
    #dd4b39 ${porcentagemAulasPendentes}, #dd4b39 ${porcentagemAulasCanceladas})`;

    return (
        <Box className="barra-porcentagem-vertical-container">
            <Tooltip title={
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Typography sx={{color: "#00a65a"}}>{props.valores[0]}</Typography>
                    <Typography sx={{ marginLeft: "2px", marginRight: "2px"}}>|</Typography>
                    <Typography sx={{color: "#f39c12"}}>{props.valores[1]}</Typography>
                    <Typography sx={{ marginLeft: "2px", marginRight: "2px"}}>|</Typography>
                    <Typography sx={{color: "#dd4b39"}}>{props.valores[2]}</Typography>
                </Box>}>
                <Box className="barra-background">
                    <Box className="barra-quantidade" sx={{
                        height: `${((valoresTotal / valoresTotal)) * 100}%`,
                        background: valoresTotal === 0 ? null : propriedadeCss,
                    }} />
                </Box>
            </Tooltip>
            <Typography>{props.titulo}</Typography>
        </Box>
    );
}

export default BarraVertical;