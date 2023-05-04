import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoRedeSocial from "../../atoms/RedeSocial/Index.jsx";
import "./style.css"

function FooterCard(props) {
    return (
        <Box className="footer-card">
            <Typography variant="h6"
                className="footer-title">{props.title}
            </Typography>
    
            <Box className={`footer-items-${props.items[0].alt != undefined ? "img" : "label"}`}>
                {
                    props.title != "Midias Sociais" ?
                    props.items.map((item) => (
                        <Typography>{item.label}</Typography>
                    )) 
                    : props.items.map((item) => (
                        <LogoRedeSocial className="footer-item-img" id={item.alt} src={item.src} alt={item.alt} href={item.href} height="32px"/>
                    ))
                }
            </Box>
        </Box>
    )
}

export default FooterCard;