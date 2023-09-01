import { Button } from '@mui/base';
import {
    CalendarMonthOutlined as CalendarMonthOutlinedIcon
} from '@mui/icons-material';
import "./style.css";

function Calendario(props) {
    return (
        <CalendarMonthOutlinedIcon onClick={() => {}} sx={{
            cursor: "pointer"
        }}/>
    )
}

export default Calendario;