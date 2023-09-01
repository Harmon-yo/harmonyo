import { Box, Button, TextField, InputAdornment } from "@mui/material";
import React from "react";
import {
  SearchOutlined as SearchOutlinedIcon
} from "@mui/icons-material";
import "./style.css";

function Pesquisa() {

  function filtrar() {
    alert("filtrar");
  }

  return (
    <TextField placeholder="Filtrar" className="input_filtro"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlinedIcon className="lupa" onClick={filtrar} sx={{
              cursor: "pointer"
            }}/>
          </InputAdornment>
        ),
      }}
      variant="standard"/>
  );
}

export default Pesquisa;
