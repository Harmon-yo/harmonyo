import React from "react";
import {
    Menu
} from "@mui/material";



function Popup(props) {
    

    return (
        <Menu
            id={props.menuId}
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
                'aria-labelledby': props.buttonClassName,
            }}
        >
            {
                props.children
            }

        </Menu>
    );
}

export default Popup;