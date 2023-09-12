import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import "./style.css";

function Loading() {
    return (
        <Box className="loading">
            <CircularProgress color="success" />
        </Box>
    );
}

export default Loading;