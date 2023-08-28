import React from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./style.css"
import EditIcon from "../../../imgs/edit-24px.png"
import DeleteIcon from "../../../imgs/delete-24px.png"
import ModalExperiencias from "../ModalExperiencias";
import Tooltip from '@mui/material/Tooltip';

function CardExperiencias(props) {

    const [exp, setExp] = useState({id: props.idExp, titulo: props.titulo, descricao: props.descricao});

    let [visibilidade, setVisibilidade] = useState(false);
    const abrirModalExperiencias = () => setVisibilidade(true);
    const fecharModalExperiencias = () => setVisibilidade(false);

    return (
        <>
            <ModalExperiencias  visibilidade={visibilidade}
                                closeModal={fecharModalExperiencias}
                                stateFormDataExps={props.stateFormDataExps} 
                                idExp={exp.id} 
                                tituloExp={exp.titulo} 
                                descExp={exp.descricao} 
                                indexExp = {props.index} isNovaExp={false}/>
            <Box className="box-experiencias">
                <Box className="box-experiencias-textos">
                    <Typography className="titulo-experiencia"> {props.titulo} </Typography>
                    <Typography className="descricao-experiencia">  {props.descricao} </Typography>
                </Box>

                <Box className="box-icons-editar-excluir" display={props.disableIconesEditarExcluir ? 'none' : 'flex'}>
                    <Tooltip title="Editar Experiência" placement="bottom-start" arrow={true}>
                        <img src={EditIcon} alt=""  className="img-icons" onClick={abrirModalExperiencias}/>
                    </Tooltip>
                    <Tooltip title="Deletar Experiência" placement="bottom-start" arrow={true}>
                        <img src={DeleteIcon} alt="" className="img-icons" onClick={() => props.deletarExpPorId(props.idExp)}/>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}

export default CardExperiencias;