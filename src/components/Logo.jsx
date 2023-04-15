import React from "react";
import "./css/logo.css";


function Logo(props) {

    return (
        <img src="/imgs/Logo-Harmonyo.png" alt="" className={"logo-padrao " + props.className}/>
    )
}

export default Logo;