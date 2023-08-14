import "./style.css";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import Card from "../../../components/Global/Card/index.jsx";
import {
    Box
} from "@mui/material";

function RealizarPedido() {
    

    return(
        <EstruturaPaginaUsuario tela="realizar-pedido">
            <Box className="pagina-container">
                <Card className="card-pedido">

                </Card>
            </Box>
        </EstruturaPaginaUsuario>
    );
}

export default RealizarPedido;