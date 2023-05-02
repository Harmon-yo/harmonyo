import React from "react";
import Container from "@mui/material/Container";
import Logo from "../../atoms/Logo";
import Box from "@mui/material/Box";
import NavigationOptions from "../../molecules/NavigationOptions";
import Button from "@mui/material/Button";



function Navbar() {

    function chamaTelaLogin() {
        window.location = "/login"
    }

    function chamaTelaCadastro() {
        window.location = "/cadastro"
    }

    return (

        <>
            <Box className="navbar" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "7vh",
                borderBottom: "0.1px solid black"
            }}>
                <Container sx={{
                    width: "95%",
                    backgroundColor: "#fff",
                    height: 1,
                    p: "0 !important",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Logo height="50%" />
                    <NavigationOptions />
                    <Box sx={{
                        width: "17%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Button
                            variant="contained"
                            href={"/Login"}
                            sx={{
                                backgroundColor: "#F0F0F0 !important",
                                color: "#000 !important",
                                fontWeight: "bold",
                                fontFamily: "Nunito"
                            }}>Login</Button>
                        <Button variant="contained" 
                                href={"/cadastro"}
                                sx={{
                                backgroundColor: "#000 !important",
                                fontWeight: "bold",
                                fontFamily: "Nunito"
                            }}>Cadastro</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Navbar;