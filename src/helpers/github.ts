import { Octokit } from '@octokit/rest';
import { GithubRepo } from '../interfaces';

const octokit = new Octokit();

export const searchUserRepos = (username: string): Promise<GithubRepo[]> => octokit
  .paginate(octokit.repos.listForUser, {
    username,
    per_page: 100,
    sort: 'created',
  })
  .then((repos) => repos.map<GithubRepo>((repo) => {
    const {
      name, description, created_at, html_url,
    } = repo;

    return {
      name: name || '',
      description: description || '',
      createdAt: created_at || '',
      url: html_url || '',
    };
  }));
