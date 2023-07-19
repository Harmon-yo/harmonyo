import React from "react";
import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main";
import { Box, Button, Typography, Avatar, Rating, TextField, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import "./style.css";
import EditIcon from "../../../imgs/edit-24px.png"
import { useState } from "react";
import InputMask from 'react-input-mask';

function PerfilUsuario() {

  let txtSobreMim = "Um professor de música apaixonado por instrumentos de corda. Com formação em Educação Musical e vasta experiência de atuação, ele compartilha sua paixão pela música através do ensino. Sua expertise abrange teoria musical, técnicas de execução e pedagogia, permitindo que ele transmita conhecimentos de forma envolvente e inspiradora aos seus alunos. "

  const [nome, setNome] = useState(sessionStorage.getItem("NOME"))

  return (
    <EstruturaPaginaUsuario>
      <Box className="pagina-container">

        <Box className="container-dados-pessoais">
          <Box className="box-foto-perfil">
            <Avatar alt="" src="../../../imgs/user.png" sx={{width: 120, height:120}}/>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="medium"/>
            <Typography className="txt-nome">{nome}</Typography>
            <Typography className="txt-idade">22 Anos</Typography>
          </Box>

          <Box className="box-dados-pessoais">
            
            <Box className="box-titulo-e-edit-icon">
              <Typography className="txt-titulo">Dados Pessoais</Typography>
              <img src={EditIcon} alt="" className="img-edit-icon"/>
            </Box>

            <Box className="box-inputs-dados-pessoais-pt1">
              <TextField id="ipt-nome" onChange={""} label="Nome" variant="standard" error={""} helperText={""} value={""} sx={{width: "40%"}}/>
              <InputMask mask='99/99/9999' value={""} onChange={""} sx={{ width: "100%" }}>
                  {() => (
                      <TextField id="ipt-dataNascimento" label="Data de Nascimento" error={""} helperText={""}  variant = "standard"/>
                  )}
              </InputMask>
              <InputMask mask='999.999.999-99' value={"999.999.999-99"} onChange={""} sx={{ width: "100%" }} >
                  {() => (
                      <TextField id="ipt-cpf" label="CPF" error={""} helperText={""}  variant = "standard" sx={{width: "30%"}}/>
                  )}
              </InputMask>
            </Box>

            <Box className="box-inputs-dados-pessoais-pt2" >
              <TextField id="ipt-email" onChange={""} label="Email" variant="standard" error={""} helperText={""} value={""} sx={{width: "64%"}}/>
              <FormControl variant="standard" sx={{ minWidth: 120, width: "30%"}}>
                <InputLabel id="demo-simple-select-standard-label">Sexo</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={""}
                  onChange={""}
                  label="Sexo"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Masculino"}>Masculino</MenuItem>
                  <MenuItem value={"Feminino"}>Feminino</MenuItem>
                  <MenuItem value={"Outros"}>Outros</MenuItem>
                </Select>
              </FormControl>        
            </Box>

          </Box>
        </Box>
        
        <Box className="container-sobre-mim-e-endereco">

          <Box className="box-sobre-mim">
            <Box className="box-titulo-e-edit-icon">
                <Typography className="txt-titulo">Sobre Mim</Typography>
                <img src={EditIcon} alt="" />
            </Box>
            <Typography className="txt-sobre-mim">{txtSobreMim}</Typography>
          </Box>
          
          <Box className="linha-divisao-pagina" />

          <Box className = "box-endereco">

            <Box className="box-titulo-e-edit-icon">
                <Typography className="txt-titulo">Endereço</Typography>
                <img src={EditIcon} alt="" />
            </Box>

            
            <Box className="box-inputs-endereco-pt1">
              <InputMask mask='99999-999' value={""} onChange={""} sx={{width: '25%'}}>
                        {() => (
                            <TextField id="ipt-cep" label="CEP" error={""} helperText={""} variant="standard"/>
                        )}
              </InputMask>
            </Box>

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-endereco" onChange={(e) => e.target.value} label="Endereço" variant="standard" error={""} helperText={""} value = "" sx={{width: "60%"}}/>           
              <TextField id="ipt-numero" onChange={""} label="Número" variant="standard" error={""} helperText={""} value={""} sx={{width: "10%"}}/>           
              <TextField id="ipt-complemento" onChange={""} label="Complemento" variant="standard" error={""} helperText={""} value={""} sx={{width: "20%"}}/>           
            </Box> 

            <Box className="box-inputs-endereco-pt1">
              <TextField id="ipt-bairro" onChange={""} label="Bairro" variant="standard" error={""} helperText={""} value={""} sx={{width: "40%"}}/>           
              <TextField id="ipt-cidade" onChange={""} label="Cidade" variant="standard" error={""} helperText={""} value={""} sx={{width: "40%"}}/>           
              <TextField id="ipt-estado" onChange={""} label="Estado" variant="standard" error={""} helperText={""} value={""} sx={{width: "10%"}}/>           
            </Box> 

          </Box>
          

        </Box>
        

     </Box>
    </EstruturaPaginaUsuario>
  );
}

export default PerfilUsuario;
