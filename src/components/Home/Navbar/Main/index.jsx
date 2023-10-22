import React from "react";
import BoxWithContainer from "../../BoxWithContainer";
import Logo from "../../../Global/Logo";
import {
    Typography,
    Box,
    Button
} from "@mui/material";
import NavigationOption from "../NavigationOption";
import "./style.css";


const pages = [
    {
        key: "navbar-inicio",
        name: "Inicio",
        underline: "always",
        fontWeight: "bold",
    },
    {
        key: "navbar-vantagens",
        name: "Vantagens",
        href: "#vantagens",
        underline: "none",
    },
    {
        key: "navbar-como-funciona",
        name: "Como Funciona",
        href: "#",
        underline: "none",
    },
    {
        key: "navbar-duvidas",
        name: "Dúvidas",
        href: "#",
        underline: "none",
    }
]

function Navbar(props) {

    return (
        <>
            <BoxWithContainer
                boxClassName="navbar"
                containerClassName="navbar-container">
                <Logo height="50%" className="navbar-logo" />
                <Box className="navbar-navigation-options">
                    <Box className="navbar-navigation-options-container">
                    {
                        pages.map((page) => {
                            return (
                                <NavigationOption
                                    key={page.key}
                                    content={page.name}
                                    href={page.href ? page.href : "#"}
                                    underline={page.underline}
                                    fontWeight={page.fontWeight}
                                    className="navbar-navigation-options-item"
                                />
                            )
                        })
                    }
                    </Box>
                </Box>
                <Box className="navbar-container-button">
                    <Button
                    variant="text"
                        key="botao-login"
                        href={"/Login"}
                        className="navbar-button-login"><Typography variant="inherit">LOGIN</Typography></Button>
                    <Button variant="text"
                        key="botao-cadastro"
                        onClick = {props.onClickCadastro}
                        className="navbar-button-cadastro"><Typography variant="inherit">CADASTRO</Typography></Button>
                </Box>
            </BoxWithContainer>
        </>
    )
}

export default Navbar;