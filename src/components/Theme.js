import { createMuiTheme } from '@material-ui/core/styles';

const mainGreen = "#AAdc59";
const darkGreen = "#86b639";

const fontPrimary = "#b84848"

export default createMuiTheme({
    palette: {
        common: {
            main: `${fontPrimary}`
        },
        primary: {
            main: `${mainGreen}`,
            dark: `${darkGreen}`
        }
    },
    typography: {
        fontFamily: "Poppins"
    },
    button: {
        backgroundColor: `${mainGreen}`,
        color: "white",
        fontWeight: 800
    }

});