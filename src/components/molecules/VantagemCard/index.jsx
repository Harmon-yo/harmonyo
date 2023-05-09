import React from "react";
import Card from "../../atoms/Card";
import Box from "@mui/material/Box";
import "./style.css";

function VantagemCard(props) {
  return (
    <Card className="vantagem-card">
        <Box className="vantagem-card-img-container">
        <Box
            className="vantagem-card-img"
            component="img"
            src={props.src}
            alt={props.alt}/>
        </Box>
      <h1 className="vantagem-card-title">{props.title}</h1>
      <p className="vantagem-card-description">{props.description}</p>
    </Card>
  );
}

export default VantagemCard;