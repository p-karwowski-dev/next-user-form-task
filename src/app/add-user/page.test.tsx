import { render, screen } from "@testing-library/react";
import Page from "./page";

// useActionState is not supported in test environment
vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useActionState: () => [
      { success: false, message: null, errors: null },
      vi.fn(),
      false,
    ],
  };
});

describe("Add User Page", () => {
  it("displays all form fields", () => {
    render(<Page />);
    expect(screen.getByText("Full Name:")).toBeInTheDocument();
    expect(screen.getByText("Age:")).toBeInTheDocument();
    expect(screen.getByText("Country:")).toBeInTheDocument();
    expect(screen.getByText("Interests:")).toBeInTheDocument();
  });
});
