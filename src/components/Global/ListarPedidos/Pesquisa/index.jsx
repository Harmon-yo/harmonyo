import { TextField, InputAdornment } from "@mui/material";
import React, { useEffect } from "react";
import {
  SearchOutlined as SearchOutlinedIcon
} from "@mui/icons-material";
import "./style.css";

function Pesquisa(props) {

  const [nome, setNome] = React.useState("");

  const filtrar = (event) => {
    setNome(event.target.value);
  }

  useEffect(() => {
    props.filtroState.setFiltro({ ...props.filtroState.filtro, nomeFiltro: nome });
  }, [nome]);

  return (
    <TextField placeholder="Filtrar" className="input_filtro" name="input_filtro"
      value={nome}
      onChange={filtrar}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlinedIcon className="lupa" />
          </InputAdornment>
        ),
      }}
      variant="standard" />
  );
}

export default Pesquisa;
