import React from "react";
import Link from "@mui/material/Link";


function NavigationOption(props) {
    return (
        <Link 
            href={props.href} 
            className={props.className}
            underline={props.underline}
            variant="subtitle1"
            color="#000"
            fontWeight={props.fontWeight}
            sx={{
                fontFamily: "Nunito"
            }}>
            {props.content}
        </Link>
    );
}

export default NavigationOption;