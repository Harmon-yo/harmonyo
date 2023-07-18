import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VLibras from "@djpfs/react-vlibras";
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Cadastro-Login/Login/Login"));
const ListarPedidos = React.lazy(() => import("./pages/Global/ListarPedidos"));
const Cadastro = React.lazy(() =>
  import("./pages/Cadastro-Login/Cadastro/Cadastro")
);
const EncontrarProfessor = React.lazy(() =>
  import("./pages/Aluno/EncontrarProfessor/EncontrarProfessores")
);
const DashboardProfessor = React.lazy(() =>
  import("./pages/Professor/Dashboard/Dashboard")
);

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
            <Route path="feedbacks" element={<></>} />
            <Route path="chat" element={<></>} />
            <Route path="pedidos" element={<ListarPedidos />} />
          </Route>

          <Route path="/aluno">
            <Route
              path="encontrar-professor"
              element={<EncontrarProfessor />}
            />
          </Route>
          <Route path="/professor">
            <Route path="dashboard" element={<DashboardProfessor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
