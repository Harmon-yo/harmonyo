import React from "react";
import Box from "@mui/material/Box";
import logoNameImg from "../../../imgs/Logo-Harmonyo.png";
import logoImg from "../../../imgs/Icone-Harmonyo.png";
import LogoNameImgWhite from "../../../imgs/Logo-Harmonyo-branco.png";
import LogoImgWhite from "../../../imgs/Icone-Harmonyo-branco.png";


function Logo(props) {
    return (
        <Box 
            className={props.className}
            component="img"
            src={props.icon ? (props.white ? LogoImgWhite : logoImg) : (props.white ? LogoNameImgWhite : logoNameImg)} 
            alt={props.alt}
            href={props.href}
            sx={{
                ...(props.height !== undefined && { height: props.height }),
                ...(props.width !== undefined && { width: props.width }),
                ...(props.height === undefined && { height: "auto" }),
                ...(props.width === undefined && { width: "auto" }),
                ...props.sx
            }}
        />
    );
}

export default Logo;