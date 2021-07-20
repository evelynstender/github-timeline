import React from 'react';

export interface GithubRepo {
  name: string;
  description: string;
  createdAt: string;
  url: string;
}

export type Store = {
  repos: GithubRepo[];
  setRepos: React.Dispatch<React.SetStateAction<GithubRepo[]>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  isLoading?: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};
