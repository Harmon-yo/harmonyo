import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import Box from "@mui/material/Box";
import "./style.css"

function ComoFunciona(props) {
    return (
        <section>
            <BoxWithContainer
                boxClassName="como-funciona-box"
                containerClassName="como-funciona-container">
                    <h1 className="title como-funciona-title">Como funciona</h1>
                    <Box className="como-funciona-img">

                    </Box>
            </BoxWithContainer>
        </section>
    );
}

export default ComoFunciona;