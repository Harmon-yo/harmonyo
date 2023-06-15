import React from 'react';
import { Typography, Box } from '@mui/material';


function DuvidasInformacao(props) {
    return (
        <Box className="duvidas-informacao">
            <Box
                component="img"
                src={props.src}
                className={props.className}
            />
            <Typography className={`${props.className}-text`} variant="inherit">
                {props.text}
            </Typography>
        </Box>
    );
}

export default DuvidasInformacao;