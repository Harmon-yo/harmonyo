import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EncontrarProfessor from './pages/EncontrarProfessores';
import DashboardProfessor from './pages/DashboardProfessor';
import {  Route, BrowserRouter, Routes  } from "react-router-dom";

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
