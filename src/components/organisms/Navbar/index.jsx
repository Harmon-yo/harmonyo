import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import Logo from "../../atoms/Logo";
import Box from "@mui/material/Box";
import NavigationOption from "../../atoms/NavigationOption";
import Button from "@mui/material/Button";
import "./style.css";


const pages = [
    {
        name: "Inicio",
        underline: "always",
        fontWeight: "bold",
    },
    {
        name: "Como Funciona",
        href: "#",
        underline: "none",
    },
    {
        name: "Vantagens",
        href: "#",
        underline: "none",
    },
    {
        name: "Dúvidas",
        href: "#",
        underline: "none",
    }
]

function Navbar() {

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
                        variant="contained"
                        href={"/Login"}
                        className="navbar-button-login">Login</Button>
                    <Button variant="contained"
                        href={"/cadastro"}
                        className="navbar-button-cadastro">Cadastro</Button>
                </Box>
            </BoxWithContainer>
        </>
    )
}

export default Navbar;