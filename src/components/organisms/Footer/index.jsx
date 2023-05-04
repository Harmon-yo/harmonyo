import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FooterCard from "../../molecules/FooterCard/index.jsx";
import "./style.css"

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

function Footer(props) {
    return (
        <>
        <BoxWithContainer
            boxClassName="footer"
            containerClassName="footer-container"
            >
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
        </BoxWithContainer>
        </>
    );

}

export default Footer;