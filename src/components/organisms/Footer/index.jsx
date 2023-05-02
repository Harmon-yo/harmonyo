import React from "react";
import { Box, Container, Typography } from "@mui/material";
import LogoRedeSocial from "../../atoms/RedeSocial/Index.jsx";

function FooterHarmonyo(props) {

    return (
        <>

        <Box sx={{  display: 'flex',
                    width: '100%',
                    height: '25vh',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    background: 'linear-gradient(180deg, #1B1B1B 0%, #000000 100%)'}}>

            <Container sx={{
                    display: 'flex',
                    width: '100%',
                    height: '70%',
                    p: "0 !important",
                    }} >
                
                <Box sx={{
                            display: 'flex',
                            width: '25%',
                            flexDirection: 'column',
                            margin:'0',
                            color: 'white',
                            fontSize: '16px',
                        }}>

                        <h1 style={{fontSize: '20px'}}>Empresa</h1>

                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            paddingTop: '5%',
                            height: '60%',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            margin:'0',
                            color: 'white',
                            fontSize: '16px',
                        }}>
                            <label>Sobre</label>
                            <label>Diretrizes</label>
                            <label>Termos de Politicas e Privacidade</label>
                        </Box>
                </Box>
                <Box sx={{
                            display: 'flex',
                            width: '25%',
                            flexDirection: 'column',
                            marginLeft: '5%',
                            color: 'white',
                            fontSize: '16px',
                        }}>

                        <h1 style={{fontSize: '20px'}}>Midias Sociais</h1>

                    <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingTop: '5%',
                            width: '50%',
                            justifyContent: 'space-between',
                    }}>
                        
                    <LogoRedeSocial src={"/imgs/linkedin32px-icon.png"} height = {'32px'}/>
                    <LogoRedeSocial src={"/imgs/facebook32px-icon.png"} />
                    <LogoRedeSocial src={"/imgs/instagram32px-icon.png"} />
                    <LogoRedeSocial src={"/imgs/whatsapp32px-icon.png"} />

                    </Box>
                </Box>

            </Container>

            <Container sx={{display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            color: 'white',

                            p: "0 !important",
                            fontWeight: 'bolder'}}>
                
                <label>Copyright © 2023, Harmonyo. Todos os direitos reservados. Desenvolvido por Harmonyo Inc.</label>
            </Container>
        </Box>
        </>
    );
    
}

export default FooterHarmonyo;