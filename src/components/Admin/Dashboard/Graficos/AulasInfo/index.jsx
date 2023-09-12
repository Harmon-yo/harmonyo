import Card from "../../../../Global/Card";
import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function AulasInfo(props) {
    const titulo = props.titulo;
    const valor = props.valor;

    return (
        <Card className="card-body">
            <Box >
                    <Typography className="card-titulo">{titulo}</Typography>
                </Box>
                <Box className={`${props.className}`}>
                    <Typography className="card-texto">{valor}</Typography>
                </Box>
        </Card>
    );
}

export default AulasInfo;