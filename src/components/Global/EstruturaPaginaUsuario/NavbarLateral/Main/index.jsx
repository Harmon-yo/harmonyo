import React from "react";
import "./style.css"
import {
    Box
} from "@mui/material";
import Logo from "../../../Logo/index.jsx";
import NavbarLateralCard from "../NavbarLateralCard/index.jsx";



function NavbarLateral(props) {
    const [active, setActive] = React.useState(false);
    return (
        <Box className="navbar-lateral-background">
            <Box className="navbar-lateral"
                onMouseEnter={() => setTimeout(() => setActive(true), 50)}
                onMouseLeave={() => setTimeout(() => setActive(false), 150)}>
                <a href="/" className="navbar-lateral-logo-container">
                    <Logo icon white height="40px" className={`navbar-lateral-logo ${active ? "hidden" : ""}`} />
                    <Logo white width="200px" className={`navbar-lateral-logo ${!active ? "hidden" : ""}`} />
                </a>

                <Box className="navbar-lateral-cards">
                    {
                        props.opcoes.map((card) => (
                            <NavbarLateralCard href={card.href} titulo={card.titulo} icon={card.icon} active={card.active} hover={active} />
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default NavbarLateral;