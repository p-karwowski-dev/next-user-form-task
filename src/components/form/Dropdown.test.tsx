import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

const options = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
];

describe("Dropdown (single)", () => {
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

describe("Dropdown (multiple)", () => {
  it("renders checkboxes for each option", () => {
    render(
      <Dropdown label="Interests" name="interests" options={options} multiple />
    );
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(2);
  });

  it("each checkbox is linked to its label", () => {
    render(
      <Dropdown label="Interests" name="interests" options={options} multiple />
    );
    expect(screen.getByLabelText("United States")).toBeInTheDocument();
    expect(screen.getByLabelText("United Kingdom")).toBeInTheDocument();
  });

  it("pre-checks defaultValue options", () => {
    render(
      <Dropdown
        label="Interests"
        name="interests"
        options={options}
        multiple
        defaultValue={["US"]}
      />
    );
    expect(screen.getByLabelText("United States")).toBeChecked();
    expect(screen.getByLabelText("United Kingdom")).not.toBeChecked();
  });
});
