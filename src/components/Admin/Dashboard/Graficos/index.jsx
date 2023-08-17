import {
    Box
} from "@mui/material";
import InformacaoAdicionalGrafico from "./Novo/UsuariosRetidos/InformacaoAdicionalGrafico/index.jsx";
import GraficoDoughnut from "./GraficoDoughnut/index.jsx";

import UsuariosCadastrados from "./Novo/UsuariosCadastrados/index.jsx";



function Graficos(props) {    
    return (
        <Box className="graficos-container"  >
            {
                props.doughnut ? (
                    <GraficoDoughnut idSelecionado={props.metricaSelecionada} />
                ) : null
            }
            {
                props.usuariosCadastrados ? (
                    <UsuariosCadastrados />
                ) : null
            }

        </Box>
    );
}

export default Graficos;