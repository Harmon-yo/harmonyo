import React from "react";
import "./css/textArea.css"

function TextArea(props) {
    
    return (
        <textarea 
            className={"txt-area " + props.classTextArea} 
             placeholder={props.placeholder}
             maxLength={props.maxChar}/>
    )
}

export default TextArea;