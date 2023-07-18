import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "../../../Global/Card/index.jsx";
import "../../../../pages/Professor/Dashboard/style.css";
import LinhaTabelaMinhasAulas from "./LinhaTabelaMinhasAulas/index.jsx";
import api from "../../../../api.js";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css"
function TabelaMinhasAulas() {
  const [carregando, setCarregando] = useState(true);
  const config = {
    headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` },
  };
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getDadosTabela();
  }, []);

  function getDadosTabela() {
    api
      .get("/professores/dashboard/minhas-aulas/" + sessionStorage.ID, config)
      .then((response) => {
        console.log(response.data);
        setCarregando(false);
        setDados(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Card className="card-tabela">
      <Typography className="chart-title" variant="h5">
        Minhas aulas
      </Typography>
      <Box className="chart-instrumentos-container">
        <TableContainer sx={{ width: "99%", maxHeight: " !important" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Instrumento</TableCell>
                <TableCell align="center">Quantidade Aulas</TableCell>
                <TableCell align="center">Rendimento total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
              {
                !carregando && dados.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Nenhuma aula encontrada
                    </TableCell>
                  </TableRow>
                ) : carregando?(
                    <CircularProgress style={{ color: "#16B364" }} />
                ): dados?(
                  dados.map((item) => <LinhaTabelaMinhasAulas item={item} />)
                ):<></>
              }

             
            </TableBody>
          </Table>
        </TableContainer>
      
      </Box>
    </Card>
  );
}

export default TabelaMinhasAulas;
