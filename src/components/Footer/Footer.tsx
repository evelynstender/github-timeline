import React from "react";

import { Box, Link, Typography } from "@material-ui/core";

import { useStyles } from "../../styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.footer}>
      <Typography align="center" variant="h6">
        Made with ❤️ by{" "}
        <Link
          color="textSecondary"
          href="https://evelynstender.com"
          rel="noreferrer"
          target="_blank"
        >
          evelynstender
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
