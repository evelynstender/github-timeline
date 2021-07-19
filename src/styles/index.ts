import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

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
      backgroundColor: "#9c27b0",
      height: 40,
      padding: theme.spacing(0.5),
    },
    scrollTop: {
      position: "fixed",
      bottom: theme.spacing(6),
      right: theme.spacing(2),
    },
    loading: {
      textAlign: "center"
    }
  })
);

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#d500f9",
    },
  },
});
export { useStyles, theme };
