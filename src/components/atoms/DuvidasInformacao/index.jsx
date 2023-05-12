import React from 'react';
import Box from '@mui/material/Box';


function DuvidasInformacao(props) {
    return (
        <Box className="duvidas-informacao">
            <Box
                component="img"
                src={props.src}
                className={props.className}
            />
            <p className={`${props.className}-text`}>
                {props.text}
            </p>
        </Box>
    );
}

export default DuvidasInformacao;