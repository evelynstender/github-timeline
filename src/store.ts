import React from "react";

import {Store} from "./interfaces"

const AppStore = React.createContext<Store>({
  repos: [],
  setRepos: () => {},
  username: "",
  setUsername: () => {},
  isLoading: undefined,
  setIsLoading: () => {},
});

export default AppStore;
