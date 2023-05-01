import React from "react";
import Box from "@mui/material/Box";


function Logo(props) {
    return props.height === undefined ? (
        <Box 
            component="img"
            src="/imgs/Logo-Harmonyo.png" 
            alt={props.alt}
            sx={{
                height: "auto",
                width: props.width,
            }}
        />
    ) : (
        <Box 
            component="img"
            src="/imgs/Logo-Harmonyo.png" 
            alt={props.alt}
            sx={{
                height: props.height,
                width: "auto"
            }}
        />
    );

}

export default Logo;