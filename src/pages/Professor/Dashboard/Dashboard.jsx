import React, { useEffect } from "react";

import { Box, Tabs, Tab } from "@mui/material";
import "./style.css";

/* ================= Componentes =================== */

import EstruturaPaginaUsuario from "../../../components/Global/EstruturaPaginaUsuario/Main/index.jsx";
import KpiDashboard from "../../../components/Professor/Dashboard/KpiDashboard/index.jsx";
import TabelaMinhasAulas from "../../../components/Professor/Dashboard/TabelaMinhasAulas/index.jsx";
import HistoricoAulasGraficoDonut from "../../../components/Professor/Dashboard/GraficoDonut/index.jsx";
import GraficoBarraEmpilhada from "../../../components/Professor/Dashboard/GraficoBarraEmpilhada/index.jsx";
/* ================= Utils ================= */
import { verificarToken } from "../../../utils/index.js";
import { useNavigate } from "react-router-dom";

function DashboardProfessor() {
  const [value, setValue] = React.useState(0);

  const handleChange = (evento, novoValor) => {
    setValue(novoValor);
  };

  function getTabProps(index) {
    return {
      id: `simple-tab-${index}`,
      className: "dashboard-professor-tabs-item",
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (verificarToken()) {
      navigate(-1);
    }
  }, []);
  var visao = `Visão Geral - ${new Date().getFullYear()}`;
  return (
    <EstruturaPaginaUsuario tela="dashboard">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        className="dashboard-professor-tabs"
      >
        <Tab label="Visão Mensal" className="tab_dash" {...getTabProps(0)} />
        <Tab label={visao} className="tab_dash" {...getTabProps(1)} />
      </Tabs>
      <Box className="pagina-container-dash">
        {value === 0 ? (
          <>
            <Box className="kpi-container">
              <KpiDashboard titulo="Rendimento total" periodo={value}/>
              <KpiDashboard titulo="Quantidade de alunos" periodo={value}/>
              <KpiDashboard titulo="Quantidade de aulas" periodo={value} />
              <KpiDashboard titulo="Tempo de resposta" periodo={value} />
            </Box>
            <Box className="charts-container">
              <HistoricoAulasGraficoDonut />
              <TabelaMinhasAulas periodo={value} />
            </Box>
          </>
        ) : (
          <>
            <Box className="kpi-container">
              <KpiDashboard titulo="Rendimento total" />
              <KpiDashboard titulo="Quantidade de alunos" />
              <KpiDashboard titulo="Quantidade de aulas" />
              <KpiDashboard titulo="Tempo de resposta" />
            </Box>
            <Box className="charts-container">
              <GraficoBarraEmpilhada />
              <TabelaMinhasAulas periodo={value}/>
            </Box>
          </>
        )}
      </Box>
    </EstruturaPaginaUsuario>
  );
}

export default DashboardProfessor;
