import { Box, Tooltip, Typography } from "@mui/material";
import './style.css';


function BarraVertical(props) {
    return (
        <Box className="barra-porcentagem-vertical-container">
            <Tooltip title={props.valor}>
                <Box className="barra-background">
                    <Box className="barra-quantidade" sx={{
                        height: `${((props.valor / props.valorTotal)) * 100}%`
                    }}/>
                </Box>
            </Tooltip>
            <Typography>{props.titulo}</Typography>
        </Box>
    );
}

export default BarraVertical;