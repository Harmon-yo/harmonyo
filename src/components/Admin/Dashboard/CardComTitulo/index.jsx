import Card from '../../../Global/Card/index.jsx';
import { Typography } from '@mui/material';
import './style.css';

function CardComTitulo (props) {
    return (
        <Card className={props.className}>
            <Typography className="card-titulo">{props.titulo}</Typography>
            {props.children}
        </Card>
    );
}

export default CardComTitulo;