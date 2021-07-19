jest.mock("./github");

import * as github from "./github";

describe("searchUserRepos", () => {
  it("should return list of repos containing name, description, createdAt", async () => {
    const expectedRepos = [
      {
        name: "repo1",
        description: "desc repo1",
        createdAt: "some date",
      },
      {
        name: "repo2",
        description: "desc repo2",
        createdAt: "some other date",
      },
    ];

    const mockSeachUserRepos = jest.spyOn(github, "searchUserRepos");

    mockSeachUserRepos.mockResolvedValue(expectedRepos);

    const repos = await github.searchUserRepos("username");

    expect(repos).toMatchObject(expectedRepos);
  });

  it("should return an error if user not found", async () => {
    const mockSeachUserRepos = jest.spyOn(github, "searchUserRepos");

    mockSeachUserRepos.mockRejectedValue({error: "not found"})

    github.searchUserRepos("wrong")
    .catch(err => {
      expect(err).toMatchObject({error: "not found"})
    })


  })
});
