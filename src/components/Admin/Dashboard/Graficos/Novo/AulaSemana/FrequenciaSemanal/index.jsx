import BarraVertical from './BarraVertical';
import Card from '../../../../CardComTitulo/index.jsx';
import { Box } from '@mui/material';
import './style.css';


function FrequenciaSemanal(props) {
    console.log("Teste")
    console.log(props.frequencias)
    return (
        <Card className="card-frequencia" titulo={props.titulo}>
            <Box className="frequencias-container">
                {
                    props.frequencias.map((frequencia) =>
                        <BarraVertical titulo={frequencia.dia} valores={frequencia.valores} valorTotal={frequencia.valorTotal}/>
                    )
                }
            </Box>
        </Card>
    );
}

export default FrequenciaSemanal;