import React from "react";
import Box from "@mui/material/Box";
import "./style.css";


function Card(props) {
    return (
        <Box className={`card ${props.className}`} sx={props.sx} id={props.id} onClick={props.onClick}>
            {props.children}
        </Box>
    );
}

export default Card;