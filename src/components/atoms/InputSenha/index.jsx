import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
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
        <>
            <FormControl sx={{ m: 0, width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password" error = {props.error}>{props.label}</InputLabel>
                    <Input error = {props.error}
                        id={props.id}
                        onChange={props.onChange}
                        type={showPassword ? 'text' : 'password'}
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
                    {props.error? <Typography sx={{
                                    fontSize: '12px',
                                    color: '#d32f2f'}} >{props.helperText}</Typography> : null }
                   
            </FormControl>
        </>
    )
}

export default InputSenha;