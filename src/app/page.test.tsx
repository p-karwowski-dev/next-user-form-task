import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("displays welcome message", () => {
    render(<Home />);
    expect(
      screen.getByText("Welcome to the User Manager App")
    ).toBeInTheDocument();
  });
});
