import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoRedeSocial from "../../atoms/RedeSocial";
import linkedinImg from "../../../imgs/linkedin32px-icon.png";
import whatsappImg from "../../../imgs/whatsapp32px-icon.png";
import facebookImg from "../../../imgs/facebook32px-icon.png";
import instagramImg from "../../../imgs/instagram32px-icon.png";
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
                src: linkedinImg,
                href: "#",
            },
            {
                alt: "Facebook",
                src: facebookImg,
                href: "#",
            },
            {
                alt: "Instagram",
                src: instagramImg,
                href: "#",
            },
            {
                alt: "Whatsapp",
                src: whatsappImg,
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
                            <Box className="footer-card">
                                <Typography variant="h6"
                                    className="footer-title">{card.title}
                                </Typography>

                                <Box className={`footer-items-${card.items[0].alt != undefined ? "img" : "label"}`}>
                                    {
                                        card.title != "Midias Sociais" ?
                                            card.items.map((item) => (
                                                <Typography>{item.label}</Typography>
                                            ))
                                            : card.items.map((item) => (
                                                <LogoRedeSocial className="footer-item-img" id={item.alt} src={item.src} alt={item.alt} href={item.href} height="32px" />
                                            ))
                                    }
                                </Box>
                            </Box>
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