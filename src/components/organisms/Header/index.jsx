import React from "react";
import Container from "@mui/material/Container";
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

function Header() {
    
    return (
        <>
            <Box className="header">
                <Container className="header-container" maxWidth="xl">
                    <Logo height="50%" className="header-logo"/>
                    <Box className="header-navigation-options">
                        {
                            pages.map((page) => {
                                return (
                                    <NavigationOption
                                        content={page.name}
                                        href={page.href ? page.href : "#"}
                                        underline={page.underline}
                                        fontWeight={page.fontWeight}
                                        className="header-navigation-options-item"
                                    />
                                )
                            })
                        }
                    </Box>
                    <Box className="header-container-button">
                        <Button
                            variant="contained"
                            href={"/Login"}
                            className="header-button-login">Login</Button>
                        <Button variant="contained" 
                                href={"/cadastro"}
                                className="header-button-cadastro">Cadastro</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Header;