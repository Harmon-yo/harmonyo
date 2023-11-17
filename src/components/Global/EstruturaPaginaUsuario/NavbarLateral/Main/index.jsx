import React from "react";
import "./style.css";
import { Box, Button } from "@mui/material";
import Logo from "../../../Logo/index.jsx";
import {
  Dashboard as DashboardIcon,
  ChatBubbleOutline as ChatIcon,
  Search as SearchIcon,
  RateReviewOutlined as FeedbackIcon,
  GradingOutlined as PedidosIcon,
  CalendarTodayOutlined as CalendarioIcon,
  Class as ClassIcon,
  DriveFileMove as ExportIcon,
} from "@mui/icons-material";
import PublishIcon from "@mui/icons-material/Publish";
import NavbarLateralCard from "../NavbarLateralCard/index.jsx";
import api from "../../../../../api";

function NavbarLateral(props) {
  const [active, setActive] = React.useState(false);
  const tipoUsuario = sessionStorage.getItem("CATEGORIA").toLocaleLowerCase();
  const currentUrl = new URL(window.location.href);


  function downloadCSV() {
    const config2 = { responseType: 'blob', headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } };
    const requestData = {};

  
    api.get(`/professores/download-csv`, config2)
    .then((response) => {
      const blob = response.data;
  
      const url = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "data-professor.csv";
  
      a.click();
  
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });


    //envio do log para S3
    /*const url = `http://localhost:8080/upload-log/${email}/${metodo}`;
    const token = sessionStorage.TOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post(url, requestData, config)
      .then((response) => {
        console.log("Resposta do servidor:", response.data);
      })
      .catch((error) => {
        console.error("Erro na solicitação:", error);
      });*/
  }

  function importTxt(e) {
    var arq = e.target.files[0] 
    const formData = new FormData()
    console.log("entrou no import txt")
    formData.append('file', arq)
    api.post(`/usuarios/importacao-dados-txt`, formData, {
        headers: {
             Authorization: `Bearer ${sessionStorage.TOKEN}`,
            'Content-Type': 'multipart/form-data'
        }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        }
    )


  }

  function downloadTXTProfessor() {
    const config2 = { responseType: 'blob', headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } };
    const requestData = {};

  
    api.get(`/usuarios/download-txt-professor`, config2)
    .then((response) => {
      const blob = response.data;
  
      const url = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "data-professor.txt";
  
      a.click();
  
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

  }

  function downloadTXTAluno() {
    const email = sessionStorage.EMAIL;
    const metodo = "downloadCSV";
    const config2 = { responseType: 'blob', headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } };
    const requestData = {};

  
    api.get(`/usuarios/download-txt-aluno`, config2)
    .then((response) => {
      const blob = response.data;
  
      const url = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "data-aluno.txt";
  
      a.click();
  
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });


  }


  const opcoesNavbar = {
    professor: [
      {
        titulo: "Dashboard",
        icon: DashboardIcon,
        active: props.tela === "dashboard" ? true : false,
        href: `/dashboard-professor`,
      },
      {
        titulo: "Agenda",
        icon: CalendarioIcon,
        active: props.tela === "agenda" ? true : false,
        href: `/agenda`,
      },
      {
        titulo: "Pedidos",
        icon: PedidosIcon,
        active: props.tela === "pedidos" ? true : false,
        href: `/pedidos`,
      },
      {
        titulo: "Chat",
        icon: ChatIcon,
        active: props.tela === "chat" ? true : false,
        href: `/chat`,
      },
      {
        titulo: "Aulas",
        icon: ClassIcon,
        active: props.tela === "aulas" ? true : false,
        href: `/aulas`,
      },
      {
        titulo: "Feedbacks",
        icon: FeedbackIcon,
        active: props.tela === "feedbacks" ? true : false,
        href: `/feedbacks`,
      },
    ],
    aluno: [
      {
        titulo: "Encontrar",
        icon: SearchIcon,
        active: props.tela === "encontrar" ? true : false,
        href: `/encontrar-professor`,
      },
      {
        titulo: "Agenda",
        icon: CalendarioIcon,
        active: props.tela === "agenda" ? true : false,
        href: `/agenda`,
      },
      {
        titulo: "Pedidos",
        icon: PedidosIcon,
        active: props.tela === "pedidos" ? true : false,
        href: `/pedidos`,
      },
      {
        titulo: "Chat",
        icon: ChatIcon,
        active: props.tela === "chat" ? true : false,
        href: `/chat`,
      },
      {
        titulo: "Feedbacks",
        icon: FeedbackIcon,
        active: props.tela === "feedbacks" ? true : false,
        href: `/feedbacks`,
      },
    ],
    administrador: [
      {
        titulo: "Dashboard",
        icon: DashboardIcon,
        active: props.tela === "dashboard" ? true : false,
        href: `/dashboard-administrador`,
      },
    ],
  };

  return (
    <Box className="navbar-lateral-background">
      <Box
        className="navbar-lateral"
        onMouseEnter={() => setTimeout(() => setActive(true), 50)}
        onMouseLeave={() => setTimeout(() => setActive(false), 150)}
      >
        <a href="/" className="navbar-lateral-logo-container">
          <Logo
            icon
            white
            height="40px"
            className={`navbar-lateral-logo ${active ? "hidden" : ""}`}
          />
          <Logo
            white
            width="200px"
            className={`navbar-lateral-logo ${!active ? "hidden" : ""}`}
          />
        </a>

        <Box className="navbar-lateral-cards">
          {opcoesNavbar[tipoUsuario].map((card) => (
            <NavbarLateralCard
              key={`opcao-navbar-${card.titulo}`}
              href={card.href}
              titulo={card.titulo}
              icon={card.icon}
              active={card.active}
              hover={active}
            />
          ))}
          {tipoUsuario === "administrador" ? (
            <Button
              onClick={downloadCSV}
              color="primary"
              className="button-export"
            >
              {" "}
              <ExportIcon className={`export-logo `} />{" "}
              <h4 className={`export-logo ${!active ? "hidden" : ""}`}>
                {" "}
                Exportação dados PROF. - CSV.
              </h4>{" "}
            </Button>
          ) : (
            ""
          )}
          {tipoUsuario === "administrador" ? (
            <Button
              color="primary"
              className="button-export"
              component="label"
            >
              <PublishIcon className={`export-logo `} />
              <h4 className={`export-logo ${!active ? "hidden" : ""}`}>
             
                Importar dados usuário TXT.
              
              </h4>
              <input  type="file"
                        hidden accept=".txt" onChange={(e) => importTxt(e)} /> 
            </Button>

          ) : (
            ""
          )}
           {tipoUsuario === "administrador" ? (
            <Button
              onClick={downloadTXTProfessor}
              color="primary"
              className="button-export"
            >
              {" "}
              <ExportIcon className={`export-logo `} />{" "}
              <h4 className={`export-logo ${!active ? "hidden" : ""}`}>
                {" "}
                Exportação dados PROF - TXT.
              </h4>{" "}
            </Button>
          ) : (
            ""
          )}
           {tipoUsuario === "administrador" ? (
            <Button
              onClick={downloadTXTAluno}
              color="primary"
              className="button-export"
            >
              {" "}
              <ExportIcon className={`export-logo `} />{" "}
              <h4 className={`export-logo ${!active ? "hidden" : ""}`}>
                {" "}
                Exportação dados ALUNO - TXT.
              </h4>{" "}
            </Button>
          ) : (
            ""
          )}


        </Box>
      </Box>
    </Box>
  );
}

export default NavbarLateral;
