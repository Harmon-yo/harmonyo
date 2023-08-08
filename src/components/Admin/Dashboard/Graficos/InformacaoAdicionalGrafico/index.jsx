import {
    Box,
    Typography
} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function InformacaoAdicionalGrafico(props) {
    return (
        <Box className="taxa-container">
            <Typography className="taxa-nome">
               {/*  <FiberManualRecordIcon sx={{
                    fontSize: "var(----fonte-h6)"
                }} /> */}
                {props.nome}
            </Typography>
            <Typography className="taxa-valor">{props.valor} ({(props.valor / props.valorTotal) * 100}%)</Typography>
        </Box>
    );
}

export default InformacaoAdicionalGrafico;