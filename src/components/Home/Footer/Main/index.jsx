import React from "react";
import BoxWithContainer from "../../BoxWithContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoRedeSocial from "../RedeSocial";
import linkedinImg from "../../../../imgs/linkedin32px-icon.png";
import whatsappImg from "../../../../imgs/whatsapp32px-icon.png";
import facebookImg from "../../../../imgs/facebook32px-icon.png";
import instagramImg from "../../../../imgs/instagram32px-icon.png";
import "./style.css"

const cards = [
    {
        key: "footer-empresa",
        title: "Empresa",
        items: [
            {
                key: "footer-item-sobre",
                label: "Sobre",
                href: "#",
            },
            {
                key: "footer-item-diretrizes",
                label: "Diretrizes",
                href: "#",
            },
            {
                key: "footer-item-termos",
                label: "Termos de Politicas e Privacidade",
                href: "#",
            },
        ],
    },
    {
        key: "footer-midias",
        title: "Midias Sociais",
        items: [
            {
                key: "footer-item-linkedin",
                alt: "Linkedin",
                src: linkedinImg,
                href: "#",
            },
            {
                key: "footer-item-facebook",
                alt: "Facebook",
                src: facebookImg,
                href: "#",
            },
            {
                key: "footer-item-instagram",
                alt: "Instagram",
                src: instagramImg,
                href: "#",
            },
            {
                key: "footer-item-whatsapp",
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
                            <Box key={card.key} className="footer-card">
                                <Typography variant="h6"
                                    className="footer-title">{card.title}
                                </Typography>

                                <Box className={`footer-items-${card.items[0].alt != undefined ? "img" : "label"}`}>
                                    {
                                        card.title != "Midias Sociais" ?
                                            card.items.map((item) => (
                                                <Typography key={item.key}>{item.label}</Typography>
                                            ))
                                            : card.items.map((item) => (
                                                <LogoRedeSocial key={item.key}className="footer-item-img" id={item.alt} src={item.src} alt={item.alt} href={item.href} height="32px" />
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