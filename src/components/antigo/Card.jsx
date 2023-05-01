import React from "react";
import "./css/card.css"

function Card(props) {
    
    return (
        <>
        <div className="card">
            <div className="image-card-box">
                <img src={"" + props.imagem} alt=""  className={props.classImage}/>
            </div>
            <div className="text-card-box">
                <label className="titulo">{props.titulo}</label>
                <label className="texto">{props.texto}</label>
            </div>
        </div>
        </>
    );
    
}

export default Card;