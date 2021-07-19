import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";


import { useStyles } from "../../styles"

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography align="center" className={classes.header} variant="h5">
            Github Timeline
          </Typography>
          <IconButton
            href="https://github.com/evelynstender/github-timeline"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Header;
