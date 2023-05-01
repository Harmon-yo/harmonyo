import React from "react";
import "./css/inputText.css"

function InputText(props) {
    
    return (
        <input className={"ipt-text " + props.classInput} type={props.type} placeholder={props.placeholder} />
    )
}

export default InputText;
