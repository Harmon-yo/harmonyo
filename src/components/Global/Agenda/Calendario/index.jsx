import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "./style.css";
function Agenda(props) {

  const {data, setData} = props.stateData;

  return (
    <LocalizationProvider adapterLocale="pt-br" dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs(data)}
        value={dayjs(data)}
        showDaysOutsideCurrentMonth
        onChange={(newValue) => {
          setData(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

export default Agenda;
