import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import "./style.css";

function BoxWithContainer(props) {
    return (
        <Box className={`box ${props.boxClassName}`}>
            <Container className={`container ${props.containerClassName}`}>
                {props.children}
            </Container>
        </Box>
    );
}

export default BoxWithContainer;