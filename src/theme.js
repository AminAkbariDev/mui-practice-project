import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary:{
            main: blue[500],
        }
    },
    myButton: {
        backgroundColor: blue[700],
        color: "#fff",
        border: "1px solid #111"
    }
})