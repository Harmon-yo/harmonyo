import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import Status from "../Status";
import ModalDetalhes from "../ModalDetalhes";
function Tabela() {
   
  const dados = [
    {
        id: 1,
        nome: "Caio Xamps",
        instrumento: "Violão",
        status: "Recusado",
        data: "10/10/2023",
        valor: "R$ 100,00",
        horario: "10:00"
      },
      {
        id: 2,
        nome: "Maria Antonina",
        instrumento: "Violino",
        status: "Cancelado",
        data: "19/05/2023",
        valor: "R$ 250,00",
        horario: "10:00"
      },
      {
        id: 2,
        nome: "Maria Antonina",
        instrumento: "Violino",
        status: "Confirmado",
        data: "19/05/2023",
        valor: "R$ 250,00",
        horario: "13:00"
      },
      {
        id: 2,
        nome: "Maria Antonina",
        instrumento: "Violino",
        status: "Aguardando Pagamento",
        data: "19/05/2023",
        valor: "R$ 250,00",
        horario: "15:00"
      },
      {
        id: 2,
        nome: "Maria Antonina",
        instrumento: "Violino",
        status: "Pendente",
        data: "19/05/2023",
        valor: "R$ 250,00",
        horario: "17:00"
      },
      {
        id: 2,
        nome: "Maria Antonina",
        instrumento: "Violino",
        status: "Concluído",
        data: "19/05/2023",
        valor: "R$ 250,00",
        horario: "19:00"
      }
  ];
  const [open, setOpen] = React.useState(false);
  const [pedido, setPedido] = React.useState({});
  const handleOpen = (ped) => {
    setOpen(true);
    setPedido(ped);
  }
  const handleClose = () => setOpen(false);
  return (
    <TableContainer style={{maxHeight: "90%", overflow: "scroll"}}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead className="head">
          <TableRow>
            <TableCell className="topCelula" align="left">
              {sessionStorage.getItem("CATEGORIA") == "Professor" ? "Aluno" : "Professor"}
            </TableCell>
            <TableCell  className="topCelula" align="center">Instrumento</TableCell>
            <TableCell className="topCelula" align="center">Status</TableCell>
            <TableCell className="topCelula" align="center">Data</TableCell>
            <TableCell className="topCelula"  align="center">Valor</TableCell>
            <TableCell className="topCelula"  align="center"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody className="conteudoTabela"> 
          {dados.map((row) => (
                <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell  className="bodyCelula" align="left">
                <PerfilUsuario nome={row.nome}/>
                </TableCell>
                <TableCell className="bodyCelula" align="center">{row.instrumento}</TableCell>
                <TableCell className="bodyCelula"  align="center"><Status status={row.status}/></TableCell>
                <TableCell className="bodyCelula"  align="center">{row.data}</TableCell>
                <TableCell className="bodyCelula" style={{fontWeight: "bold"}}  align="left">{row.valor}</TableCell>
                <TableCell className="bodyCelula"  align="center">
                    <Button variant="outlined" className="botao" onClick={()=>{handleOpen(row)}}> Detalhes</Button>
                </TableCell>
                </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalDetalhes open={open} onClose={handleClose} pedido={pedido} />
    </TableContainer>
  );
}

export default Tabela;
