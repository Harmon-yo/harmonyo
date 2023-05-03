import React from "react";
import Container from "@mui/material/Container";
import Logo from "../../atoms/Logo";
import Box from "@mui/material/Box";
import NavigationOptions from "../../molecules/NavigationOptions";
import Button from "@mui/material/Button";
import "./style.css";



function Navbar() {

    function chamaTelaLogin() {
        window.location = "/login"
    }

    function chamaTelaCadastro() {
        window.location = "/cadastro"
    }

    return (
        <>
            <Box className="navbar">
                <Container className="navbar-container">
                    <Logo height="50%" />
                    <NavigationOptions className="navbar-navigation-options"/>
                    <Box className="navbar-container-button">
                        <Button
                            variant="contained"
                            href={"/Login"}
                            className="navbar-button-login">Login</Button>
                        <Button variant="contained" 
                                href={"/cadastro"}
                                className="navbar-button-cadastro">Cadastro</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Navbar;