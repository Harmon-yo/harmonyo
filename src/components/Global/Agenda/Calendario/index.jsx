import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "./style.css";
import { styled } from "@mui/material/styles";
import api from "../../../../api";

const DiaDestacado = styled(PickersDay, {
  shouldForwardProp: (prop) => prop !== "customColor", // Evita encaminhar a prop customColor para o elemento DOM
})(({ theme, customColor }) => ({
  ...(customColor && {
    backgroundColor: "#FFFFFF",
    border: "2px solid #099250",
    color: "#000",
    "&:hover, &:focus": {
      backgroundColor: "#cccccc",
    },
  }),
}));

function transformarData(data) {
  var dataRecebida = dayjs(data).toDate();
  var dia =
    dataRecebida.getDate() < 10
      ? "0" + dataRecebida.getDate()
      : dataRecebida.getDate();
  var mes =
    dataRecebida.getMonth() < 10
      ? "0" + (dataRecebida.getMonth() + 1)
      : dataRecebida.getMonth() + 1;
  var dataF = dataRecebida.getFullYear() + "-" + mes + "-" + dia;
  return dataF;
}

function Day(props) {
  const { day, selectedDay, ...other } = props;
  var diaComp = dayjs(day).toDate();
  var data = transformarData(diaComp);
  const customColor = props.diasComAulas.includes(data) ? "#FF5722" : null;
  return <DiaDestacado {...other} day={day} customColor={customColor} custom />;
}

function Agenda(props) {
  const { data, setData } = props.stateData;
  const [diasComAulas, setDiasComAulas] = useState([]);

  function getAulas() {
    var data = transformarData(props.stateData.data);

    api
      .get(
        `/pedidos/pedidos-por-mes-id-usuario?fkUsuario=${sessionStorage.ID}&data=${data}`,
        { headers: { Authorization: `Bearer ${sessionStorage.TOKEN}` } }
      )

      .then((response) => {
        var resposta = response.data;
        const novosDiasComAulas = resposta.map((aula) =>
          aula.dataAula.substring(0, 10)
        );
        setDiasComAulas(novosDiasComAulas);
      })
      .catch((error) => {
       
      });
  }

  useEffect(() => {
    getAulas();
  }, [data]);

  return (
    <LocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs(data)}
        value={dayjs(data)}
        showDaysOutsideCurrentMonth
        onChange={(newValue) => {
          setData(newValue);
        }}
        onMonthChange={(newMonth) => {
          if (new Date().getMonth() === newMonth.toDate().getMonth()) {
            setData(dayjs(new Date()));
          } else {
            setData(newMonth);
          }
          getAulas();
        }}
        slots={{
          day: (props) => <Day {...props} diasComAulas={diasComAulas} />,
        }}
      />
    </LocalizationProvider>
  );
}

export default Agenda;
