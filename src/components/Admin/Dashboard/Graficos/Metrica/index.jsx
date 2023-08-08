import Card from "../../../../Global/Card/index.jsx";
import {
    Typography
} from "@mui/material";
import "./style.css";

function Metrica(props) {

    const obterEstiloAtivo = (id) => {
        if (id === props.idMetricaSelecionada) {
            return "metrica-container selecionado";
        } else {
            return "metrica-container";
        }
    };

    const handleClickMetrica = props.handleClickMetrica;

    return (
        <Card key={props.id} className={obterEstiloAtivo(props.id)} onClick={() => handleClickMetrica(props.id)}>
            <Typography className="metrica-titulo" >{props.nome}</Typography>
            <Typography className="metrica-valor">{props.valor}</Typography>
        </Card>
    );
}

export default Metrica;