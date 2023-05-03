import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FooterCard from "../../molecules/FooterCard/index.jsx";
import LogoRedeSocial from "../../atoms/RedeSocial/Index.jsx";
import "./style.css"

function Footer(props) {
    const cards = [
        {
            title: "Empresa",
            items: [
                {
                    label: "Sobre",
                    href: "#",
                },
                {
                    label: "Diretrizes",
                    href: "#",
                },
                {
                    label: "Termos de Politicas e Privacidade",
                    href: "#",
                },
            ],
        }, 
        {
            title: "Midias Sociais",
            items: [
                {
                    alt: "Linkedin",
                    src: "/imgs/linkedin32px-icon.png",
                    href: "#",
                },
                {
                    alt: "Facebook",
                    src: "/imgs/facebook32px-icon.png",
                    href: "#",
                },  
                {
                    alt: "Instagram",
                    src: "/imgs/instagram32px-icon.png",
                    href: "#",
                },
                {
                    alt: "Whatsapp",
                    src: "/imgs/whatsapp32px-icon.png",
                    href: "#",
                },
            ],
        }
    ]
    return (
        <>
            <Box className="footer">

                <Container className="footer-container">
                    <Box className="items">
                        {
                            cards.map((card) => (
                                <FooterCard title={card.title} items={card.items} />
                            ))
                        }
                    </Box>

                    <Box className="direitos">
                        <Typography variant="subtitle1">
                            Copyright © 2023, Harmonyo. Todos os direitos reservados. Desenvolvido por Harmonyo Inc.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );

}

export default Footer;