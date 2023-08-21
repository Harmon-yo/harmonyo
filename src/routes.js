import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VLibras from "@djpfs/react-vlibras";


const Home = React.lazy(() => import("./pages/Home"));
const Chat = React.lazy(() => import("./pages/Global/Chat/Chat"));
const Cadastro = React.lazy(() => import("./pages/Cadastro-Login/Cadastro/Cadastro"));
const Login = React.lazy(() => import("./pages/Cadastro-Login/Login/Login"));

/* Aluno */
const EncontrarProfessor = React.lazy(() => import("./pages/Aluno/EncontrarProfessor/EncontrarProfessores"));
const RealizarPedido = React.lazy(() => import("./pages/Aluno/RealizarPedido/RealizarPedido"));

/* Professor */
const DashboardProfessor = React.lazy(() => import("./pages/Professor/Dashboard/Dashboard"));

/* Aluno e Professor */
const PerfilUsuario = React.lazy(() => import("./pages/Global/PerfilUsuario"));
const Agenda = React.lazy(() => import("./pages/Global/Agenda/index"));
const ListarPedidos = React.lazy(() => import("./pages/Global/ListarPedidos"));
const PerfilExibicaoUsuario = React.lazy(() => import("./pages/Global/PerfilExibicaoUsuario"));

/* Admin */
const DashboardAdmin = React.lazy(() => import("./pages/Admin/Dashboard/Dashboard"));
function Rotas() {
  return (
    <>
      <VLibras forceOnload />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="encontrar-professor" element={<EncontrarProfessor />} />
            <Route path="dashboard-admin" element={<DashboardAdmin />} />
            <Route path="dashboard-professor" element={<DashboardProfessor />} />
            <Route path="feedbacks" element={<></>} />
            <Route path="chat" element={<Chat />} />
            <Route path="pedidos" element={<ListarPedidos />} />
            <Route path="perfil" element={<PerfilUsuario />} />
            <Route path="exibicao-perfil" element={<PerfilExibicaoUsuario />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="pedido" element={<RealizarPedido/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
