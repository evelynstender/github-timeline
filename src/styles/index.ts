import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(15, 0),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    gridItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
    paper: {
      padding: theme.spacing(1.5),
      cursor: "pointer",
      maxWidth: 500,
    },
    typography: {
      wordBreak: "break-word",
    },
    input: {
      height: 56,
    },
    searchBar: {
      padding: theme.spacing(5, 0),
    },
    button: {
      marginLeft: theme.spacing(1),
    },
    username: {
      fontWeight: "bold",
      padding: theme.spacing(5, 0),
    },
    timelineWrapper: {
      minWidth: 900,
    },
    timelineContent: {
      alignContent: "right",
    },
    header: {
      flexGrow: 1,
    },
    footer: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      backgroundColor: purple[300],
      height: 40,
      padding: theme.spacing(0.5)
    },
  })
);

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});
export { useStyles, theme };
