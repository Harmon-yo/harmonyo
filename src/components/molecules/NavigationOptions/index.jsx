import React from "react";
import Box from "@mui/material/Box";
import NavigationOption from "../../atoms/NavigationOption";

function NavigationOptions(props) {

    return (
        <>
            <Box className={props.className}>
                <NavigationOption content="Inicio" underline="always" fontWeight={"bold"} />
                <NavigationOption content="Como Funciona" goToElement="#" underline="none" /> {/* colocar #Id para ir */}
                <NavigationOption content="Vantagens" goToElement="#" underline="none" />
                <NavigationOption content="Dúvidas" goToElement="#" underline="none" />
            </Box>
        </>
    )
}

export default NavigationOptions;