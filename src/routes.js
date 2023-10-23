import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VLibras from "@djpfs/react-vlibras";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Global/Chat/Chat"));
const Cadastro = lazy(() => import("./pages/Cadastro-Login/Cadastro/Cadastro"));
const Login = lazy(() => import("./pages/Cadastro-Login/Login/Login"));

/* Aluno */
const EncontrarProfessor = lazy(() => import("./pages/Aluno/EncontrarProfessor/EncontrarProfessores"));
const RealizarPedido = lazy(() => import("./pages/Aluno/RealizarPedido/RealizarPedido"));

/* Professor */
const DashboardProfessor = lazy(() => import("./pages/Professor/Dashboard/Dashboard"));
const Aulas = lazy(() => import("./pages/Professor/Aulas"));

/* Aluno e Professor */
const PerfilUsuario =   lazy(() => import("./pages/Global/PerfilUsuario"));
const Agenda =  lazy(() => import("./pages/Global/Agenda/index"));
const ListarPedidos =   lazy(() => import("./pages/Global/ListarPedidos"));
const PerfilExibicaoUsuario =   lazy(() => import("./pages/Global/PerfilExibicaoUsuario"));
const TelaFeedbacks = lazy(() => import("./pages/Global/TelaFeedbacks"))

/* Admin */
const DashboardAdmin =  lazy(() => import("./pages/Admin/Dashboard2/Dashboard"));

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
            <Route path="dashboard-administrador" element={<DashboardAdmin />} />
            <Route path="dashboard-professor" element={<DashboardProfessor />} />
            <Route path="feedbacks" element={<TelaFeedbacks />} />
            <Route path="chat" element={<Chat />} />
            <Route path="pedidos" element={<ListarPedidos />} />
            <Route path="perfil" element={<PerfilUsuario />} />
            <Route path="exibicao-perfil" element={<PerfilExibicaoUsuario />} />
            <Route path="aulas" element={<Aulas />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="pedido" element={<RealizarPedido/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
