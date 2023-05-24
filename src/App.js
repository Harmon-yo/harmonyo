import {  Route, BrowserRouter, Routes  } from "react-router-dom";
import React from 'react';

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Cadastro = React.lazy(() => import('./pages/Cadastro'))
const EncontrarProfessor = React.lazy(() => import('./pages/EncontrarProfessores'))
const DashboardProfessor = React.lazy(() => import('./pages/DashboardProfessor'))

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/alunos/encontrar-professor" element={<EncontrarProfessor />} /> 
        <Route path="/professores/dashboard" element={<DashboardProfessor />} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
