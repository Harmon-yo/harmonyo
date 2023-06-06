import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "../../atoms/Card/index.jsx";
import "../../templates/DashboardProfessorConteudo/style.css";
import LinhaTabelaMinhasAulas from "../../molecules/LinhaTabelaMinhasAulas";
import api from "../../../api";
import { useEffect } from "react";
import { useState } from "react";

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
        setCarregando(false);
       
        setDados(response.data);
      });
  }

  if (carregando) {
    return <div>Carregando...</div>;
  } else {
    return (
      <Card className="instrumento-card">
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
                {dados? dados.map((item) => (
                  <LinhaTabelaMinhasAulas item={item} />
                )): <></>}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Box className="teste">
                            <Typography>
                                Valor:
                            </Typography>
                            <Typography>
                                90
                            </Typography>
                            <Typography>
                                R$ 900,00
                            </Typography>
                        </Box> */}
        </Box>
      </Card>
    );
  }
}

export default TabelaMinhasAulas;
