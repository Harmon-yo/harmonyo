import React from "react";
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

function Day(props) {
  const { day, selectedDay, ...other } = props;
  const customColor = day.isSame(dayjs("2023-08-15"), "day") ? "#FF5722" : null;
  return <DiaDestacado {...other} day={day} customColor={customColor} custom />;
}

function Agenda(props) {

  const { data, setData } = props.stateData;

  

  return (
    <LocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs(data)}
        value={dayjs(data)}
        showDaysOutsideCurrentMonth
        onChange={(newValue) => {
          setData(newValue);
        }}
        dayOfWeekFormatter={(dayOfWeek, short) => {
          const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
          const weekdaysShort = ["D", "S", "T", "Q", "Q", "S", "S"];
          return short ? weekdaysShort[dayOfWeek] : weekdays[dayOfWeek];
        }}
        slots={{ day: Day }}
      />
    </LocalizationProvider>
  );
}

export default Agenda;
