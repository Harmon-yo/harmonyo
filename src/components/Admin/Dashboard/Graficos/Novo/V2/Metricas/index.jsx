import Card from "../../CardComTitulo/index.jsx";
import {
    Box,
    Typography
} from "@mui/material";
import "./style.css";

function Metricas(props) {

    const valor = (metrica) => {return metrica.id === 4 ? `R$ ${metrica.valor}` : metrica.valor}

    return (
        <Box className="metricas-container">
            {
                props.metricas.map((metrica) =>
                    (<Card key={metrica.id} className="card-metrica" titulo={metrica.nome}>
                        <Typography className="card-valor">{valor(metrica)}</Typography>
                    </Card>))
            }
        </Box>
    );
}

export default Metricas;