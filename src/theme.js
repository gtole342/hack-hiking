import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { yellow, green } from "@material-ui/core/colors";


export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  }
});

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    margin: "0px 0px 0px 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "0px 0px 0px 240px",
      flexShrink: 0
    }
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#91A250',
    zIndex: theme.zIndex.drawer + 1,
  },
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  block: {
    display: "block"
  },
  contentWrapper: {},
  margin: "40px 16px",
}));