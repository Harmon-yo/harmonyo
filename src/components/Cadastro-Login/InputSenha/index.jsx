import React from "react";
import {
    IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,


} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Typography } from "@mui/material";

function InputSenha(props) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ m: 0, width: props.width }} >
            <InputLabel htmlFor="standard-adornment-password" error={props.error}>{props.label}</InputLabel>
            <OutlinedInput error={props.error}
                id={props.id}
                onChange={props.onChange}
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {props.error ? <Typography sx={{
                fontSize: '12px',
                color: '#d32f2f'
            }} >{props.helperText}</Typography> : null}

        </FormControl>
    )
}

export default InputSenha;