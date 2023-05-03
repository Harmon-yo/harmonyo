import React from "react";
import Box from "@mui/material/Box";


function LogoRedeSocial(props) {
    return (
        <Box 
            className={props.className}
            component="img"
            src={props.src}
            alt={props.alt}
            sx={{
                ...(props.height !== undefined && { height: props.height }),
                ...(props.width !== undefined && { width: props.width }),
                ...(props.height === undefined && { height: "auto" }),
                ...(props.width === undefined && { width: "auto" })
            }}
        />
    );
}

export default LogoRedeSocial;