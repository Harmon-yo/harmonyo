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
import PerfilUsuario from "../PerfilUsuario/index.jsx";
import Status from "../Status";
import ModalDetalhes from "../ModalDetalhes/index.jsx";
import api from "../../../../api";
import ModalAvaliacao from "../../ModalAvaliacao/index.jsx";

function Tabela(props) {
  const [dadosPedidos, setDadosPedidos] = useState([]);
  const { erros, setErros } = props.errosState;

  let filtroArray = props.filtroState.filtro;

  console.log(filtroArray);

  let url = "";

  if (filtroArray.status === "Sem Filtro") {
    url = `/pedidos/usuario/${sessionStorage.ID}`;
  } else {
    url = `/pedidos/usuario/hashing/${sessionStorage.ID}?status=${filtroArray.status}`;
  }

  useEffect(() => {
    api.get(url,
      { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }).then((response) => {
        let pedidos = response.data;

        if (pedidos !== "") {
          pedidos = pedidos.sort(
            (a, b) => {
              return new Date(b.horaCriacao) - new Date(a.horaCriacao);
            }
          )

          if (filtroArray.dataInicio !== null && filtroArray.dataFim !== null) {
            pedidos = pedidos.filter(
              (pedido) => {
                let dataPedido = new Date(pedido.dataAula).toLocaleDateString();

                let dataInicio = new Date(filtroArray.dataInicio);
                dataInicio.setDate(dataInicio.getDate() + 1);
                dataInicio = dataInicio.toLocaleDateString();

                let dataFim = new Date(filtroArray.dataFim);
                dataFim.setDate(dataFim.getDate() + 1);
                dataFim = dataFim.toLocaleDateString();

                console.log(dataPedido + " / " + dataInicio + " / " + dataFim);
                return dataPedido >= dataInicio && dataPedido <= dataFim;
              }
            )
          }

          if (sessionStorage.getItem("CATEGORIA") === "Professor") {
            if (filtroArray.nomeFiltro !== "") {
              pedidos = pedidos.filter(
                (pedido) => {
                  return pedido.aluno.nome.toLowerCase().includes(filtroArray.nomeFiltro.toLowerCase());
                }
              )
            }
          } else {
            if (filtroArray.nomeFiltro !== "") {
              pedidos = pedidos.filter(
                (pedido) => {
                  return pedido.professor.nome.toLowerCase().includes(filtroArray.nomeFiltro.toLowerCase());
                }
              )
            }
          }

          setDadosPedidos(pedidos);
          console.log(pedidos);
        } else {
          setDadosPedidos([]);
        }
      });
  }, [filtroArray])

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
          {dadosPedidos.length !== 0 ?
            dadosPedidos.map((row) => (
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
                <TableCell className="bodyCelula" style={{ fontWeight: "bold" }} align="left">R$ {(row.valorAula).toFixed(2)}</TableCell>
                <TableCell className="bodyCelula" align="center">
                  {row.status.descricao === "Concluído" ?
                    <ModalAvaliacao stateUsuario={row}></ModalAvaliacao>
                    :
                    <Button variant="outlined" className="botao" onClick={() => { handleOpen(row) }}> Detalhes</Button>
                  }
                </TableCell>
              </TableRow>
            )) :
            <TableRow>
              <TableCell colSpan={6} className="bodyCelula" align="center">Nenhum pedido encontrado</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
      <ModalDetalhes open={open} onClose={handleClose} pedido={pedido} errosState={{ erros, setErros }} />
    </TableContainer >
  );
}

export default Tabela;
