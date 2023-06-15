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
                    props.hover ? <props.icon className="navbar-lateral-card-img-hover"/>
                        : <props.icon className="navbar-lateral-card-img"/>
                }
                {
                    props.hover ? <Typography className="navbar-lateral-card-texto">{props.titulo}</Typography>
                        : ""
                }
            </Box>
        </Link>
    );
}

export default NavbarLateralCard;