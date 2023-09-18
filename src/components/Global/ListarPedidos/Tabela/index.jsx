import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import "./style.css";
import PerfilUsuario from "../PerfilUsuario";
import Status from "../Status";
import ModalDetalhes from "../ModalDetalhes";
import api from "../../../../api";
import ModalAvaliacao from "../../ModalAvaliacao/index.jsx";
import ModalFiltroErro from "../ModalFiltroErro/index.jsx";

function Tabela(props) {
  const [dadosPedidos, setDadosPedidos] = useState([]);
  const { erros, setErros } = props.errosState;

  let statusFiltro = props.filtroState.filtro.status;

  let url = "";

  if (statusFiltro === "Sem Filtro") {
    url = `/pedidos/usuario/${sessionStorage.ID}`;
  } else {
    url = `/pedidos/usuario/hashing/${sessionStorage.ID}?status=${statusFiltro}`;
  }

  const [filtroErro, setFiltroErro] = useState(false);

  useEffect(() => {
    api.get(url,
      { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
        let pedidos = response.data;

        if (pedidos === "") {
          setFiltroErro(true);
        } else {
          setFiltroErro(false);

          pedidos = pedidos.sort(
            (a, b) => {
              return new Date(b.horaCriacao) - new Date(a.horaCriacao);
            }
          )
          setDadosPedidos(pedidos);
          console.log(pedidos);
        }
      });
  }, [url])

  const [open, setOpen] = useState(false);
  const [pedido, setPedido] = useState();

  const handleOpen = (ped) => {
    console.log(ped);
    setOpen(true);
    setPedido(ped);
  }

  const handleClose = () => setOpen(false);

  const handleData = (data) => {
    let dataFormatada = new Date(data);
    return dataFormatada.toLocaleDateString();
  }

  return (
    <TableContainer style={{ maxHeight: "90%", overflow: "scroll" }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead className="head">
          <TableRow>
            <TableCell className="topCelula" align="left">
              {sessionStorage.getItem("CATEGORIA") === "Professor" ? "Aluno" : "Professor"}
            </TableCell>
            <TableCell className="topCelula" align="center">Instrumento</TableCell>
            <TableCell className="topCelula" align="center">Status</TableCell>
            <TableCell className="topCelula" align="center">Data</TableCell>
            <TableCell className="topCelula" align="center">Valor</TableCell>
            <TableCell className="topCelula" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="conteudoTabela">
          {dadosPedidos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="bodyCelula" align="left">

                <PerfilUsuario
                  id={sessionStorage.CATEGORIA === "Professor" ? row.aluno.id : row.professor.id}
                  nome={sessionStorage.CATEGORIA === "Professor" ? row.aluno.nome : row.professor.nome} />
              </TableCell>
              <TableCell className="bodyCelula" align="center">{row.aula.instrumento.nome}</TableCell>
              <TableCell className="bodyCelula" align="center"><Status status={row.status.descricao} /></TableCell>
              <TableCell className="bodyCelula" align="center">{handleData(row.dataAula)}</TableCell>
              <TableCell className="bodyCelula" style={{ fontWeight: "bold" }} align="left">R$ {(row.aula.valorAula).toFixed(2)}</TableCell>
              <TableCell className="bodyCelula" align="center">
                {row.status.descricao === "Concluído" ?
                  <ModalAvaliacao stateUsuario={row}></ModalAvaliacao>
                  :
                  <Button variant="outlined" className="botao" onClick={() => { handleOpen(row) }}> Detalhes</Button>
                }
              </TableCell>
            </TableRow>
          ))}
          {filtroErro === true ? <ModalFiltroErro statusErro={statusFiltro}></ModalFiltroErro> : null}
        </TableBody>
      </Table>
      <ModalDetalhes open={open} onClose={handleClose} pedido={pedido} errosState={{ erros, setErros }} />
    </TableContainer >
  );
}

export default Tabela;
