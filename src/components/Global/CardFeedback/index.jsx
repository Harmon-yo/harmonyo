import { Box, Typography, Rating} from "@mui/material";
import "./style.css";

import { useState, useEffect } from "react";
import AvatarUsuario from "../../../components/Global/AvatarComFoto";


function CardFeedback(props) {

    return(
        <>
            <Box className={"container-feedback"}>
                <Box className={"box-ft-avaliador"}>
                    <AvatarUsuario
                        id={props.id}
                        className="avatar-usuario"
                        nome={""}
                    />
                </Box>
                <Box className={"box-info-avaliacao"}>
                    <Typography className="txt-nome-avaliador">{props.nome}</Typography>
                    <Box className="box-avaliacao-data">
                                <Typography sx={{fontWeight: "bold"}}>{props.valorAvaliacao.toFixed(2)}</Typography>
                                <Rating name="half-rating-read" defaultValue={0} precision={0.5} readOnly size="medium" value={props.valorAvaliacao} />
                                <Typography>{props.dataAvaliacao}</Typography>
                    </Box>
                    <Typography className="txt-avaliacao">
                        {props.txtAvaliacao}
                    </Typography>

                </Box>
            </Box>    
        </>
    )
}

export default CardFeedback;