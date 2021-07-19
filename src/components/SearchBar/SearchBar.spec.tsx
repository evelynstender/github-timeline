import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchBar } from ".";

describe("SeachBar", () => {
  it("should disable search button if no input", async () => {
    render(<SearchBar setRepos={jest.fn()} />);

    const searchButton = await screen.getByRole("button", {
      name: /Search/i,
    });

    expect(searchButton).toBeDisabled();
  });

  it("should enable search button if there is input", async () => {
    render(<SearchBar setRepos={jest.fn()} />);

    const input = await screen.getByRole("textbox");

    userEvent.type(input, "blah");

    const searchButton = await screen.getByRole("button", {
      name: /Search/i,
    });

    expect(searchButton).toBeEnabled();
  });
});
