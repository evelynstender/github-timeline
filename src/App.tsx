import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { GithubTimeline } from "./components/GithubTimeline";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ScrollTop } from "./components/ScrollTop";
import { GithubRepo } from "./interfaces";

import { useStyles, theme } from "./styles";

import { ThemeProvider } from "@material-ui/styles";

import {
  Grid,
  CssBaseline,
  Fab
} from "@material-ui/core";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";



import AppStore from "./store"



const App = () => {
  const classes = useStyles();

  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [username, setUsername] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  return (
    <AppStore.Provider
      value={{
        repos,
        setRepos,
        username,
        setUsername,
        isLoading,
        setIsLoading,
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <Grid className={classes.root}>
          <Grid item className={classes.gridItem}>
            <SearchBar />
          </Grid>
          <Grid item className={classes.gridItem}>
            <GithubTimeline />
          </Grid>
        </Grid>
        <ScrollTop>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Footer />
      </ThemeProvider>
    </AppStore.Provider>
  );
};

export default App;
