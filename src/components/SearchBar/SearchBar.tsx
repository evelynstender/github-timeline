import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";

import { searchUserRepos } from "../../helpers/github";

import { useStyles } from "../../styles";

import AppStore from "../../store";

const SearchBar = () => {
  const classes = useStyles();

  const [githubUsername, setGihubUsername] = useState("");

  const { setRepos, setUsername, setIsLoading } = React.useContext(AppStore);

  const handleSearch = () => {
    setIsLoading(true);
    setUsername(githubUsername);
    setRepos([]);
    searchUserRepos(githubUsername)
      .then((repos) => {
        setRepos(repos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("errou", error);
      });
  };

  return (
    <Box className={classes.searchBar}>
      <TextField
        value={githubUsername}
        onChange={(event) => {
          setGihubUsername(event.target.value);
        }}
        label="Github username"
        variant="outlined"
        data-testid="searchInput"
        InputProps={{
          className: classes.input,
        }}
      />
      <Button
        disabled={!(githubUsername.length > 0)}
        onClick={handleSearch}
        variant="contained"
        color="primary"
        className={`${classes.input} ${classes.button}`}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
