import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VLibras from "@djpfs/react-vlibras";
const Home = React.lazy(() => import("./pages/Home"));
const Chat = React.lazy(() => import("./pages/Global/Chat/Chat"));
const PerfilUsuario = React.lazy(() => import("./pages/Global/PerfilUsuario"));
const Login = React.lazy(() => import("./pages/Cadastro-Login/Login/Login"));
const ListarPedidos = React.lazy(() => import("./pages/Global/ListarPedidos"));
const Agenda = React.lazy(() => import("./pages/Global/Agenda/index"));
const Cadastro = React.lazy(() => import("./pages/Cadastro-Login/Cadastro/Cadastro"));
const EncontrarProfessor = React.lazy(() => import("./pages/Aluno/EncontrarProfessor/EncontrarProfessores"));
const DashboardProfessor = React.lazy(() => import("./pages/Professor/Dashboard/Dashboard"));
const DashboardAdmin = React.lazy(() => import("./pages/Admin/Dashboaard/Dashboard"));
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
            <Route path="agenda" element={<Agenda />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
