import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

const options = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
];

describe("Dropdown", () => {
  it("renders label and select", () => {
    render(<Dropdown label="Country" name="country" options={options} />);
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("label is linked to select via htmlFor", () => {
    render(<Dropdown label="Country" name="country" options={options} />);
    expect(screen.getByLabelText("Country")).toHaveAttribute("id", "country");
  });

  it("renders all options plus placeholder", () => {
    render(<Dropdown label="Country" name="country" options={options} />);
    expect(screen.getByText("Select Country")).toBeInTheDocument();
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("United Kingdom")).toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(
      <Dropdown
        label="Country"
        name="country"
        options={options}
        error="Required"
      />
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
