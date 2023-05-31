import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import { Box, Typography } from "@mui/material";
import "./style.css"

function ComoFunciona(props) {
    return (
        <section>
            <BoxWithContainer
                boxClassName="como-funciona-box"
                containerClassName="como-funciona-container">
                    <Typography className="title como-funciona-titulo">Como funciona</Typography>
                    <Box className="como-funciona-img">

                    </Box>
            </BoxWithContainer>
        </section>
    );
}

export default ComoFunciona;