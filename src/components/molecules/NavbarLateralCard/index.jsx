import React from "react";
import "./style.css"
import {
    Box,
    Typography,
    Link
} from "@mui/material";
import { } from "react-router-dom";

function NavbarLateralCard(props) {
    return (
        <Link className="navbar-lateral-card-container" href={props.href} underline="none">
            <Box className={`navbar-lateral-card ${props.active ? "active" : "not-active"}`}>
                {
                    props.hover ? <img className={`navbar-lateral-card-img-hover`} src={props.src} />
                        : <img className="navbar-lateral-card-img" src={props.src} />
                }
                {
                    props.hover ? <Typography variant="h6" className="navbar-lateral-card-texto">{props.titulo}</Typography>
                        : ""
                }
            </Box>
        </Link>
    );
}

export default NavbarLateralCard;