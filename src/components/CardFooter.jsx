import React from "react";
import "./css/cardFooter.css"

function CardFooter(props) {
    
    return (
        <>
        <div className={"card-footer " + props.classCardFooter}>
            <label className="card-footer-titulo">{props.titulo}</label>
            {props.children}
        </div>
        </>
    )
}

export default CardFooter;