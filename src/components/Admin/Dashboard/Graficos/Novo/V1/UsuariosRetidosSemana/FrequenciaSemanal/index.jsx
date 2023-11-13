import BarraVertical from './BarraVertical';
import Card from '../../../../../CardComTitulo/index.jsx';
import { Box } from '@mui/material';
import './style.css';

function FrequenciaSemanal(props) {
    const valorTotal = props.frequencias.reduce((a, b) => a + b.valor, 0);

    return (
        <Card className="card-frequencia" titulo={props.titulo}>
            <Box className="frequencias-container">
                {
                    props.frequencias.map((frequencia) =>
                        <BarraVertical titulo={frequencia.dia} valor={frequencia.valor} valorTotal={valorTotal} />
                    )
                }
            </Box>
        </Card>
    );
}

export default FrequenciaSemanal;