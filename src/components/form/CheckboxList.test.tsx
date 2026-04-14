import { render, screen } from "@testing-library/react";
import CheckboxList from "./CheckboxList";

const options = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
];

describe("CheckboxList", () => {
  it("renders checkboxes for each option", () => {
    render(
      <CheckboxList label="Interests" name="interests" options={options} />
    );
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(2);
  });

  it("each checkbox is linked to its label", () => {
    render(
      <CheckboxList label="Interests" name="interests" options={options} />
    );
    expect(screen.getByLabelText("United States")).toBeInTheDocument();
    expect(screen.getByLabelText("United Kingdom")).toBeInTheDocument();
  });

  it("pre-checks defaultValue options", () => {
    render(
      <CheckboxList
        label="Interests"
        name="interests"
        options={options}
        defaultValue={["US"]}
      />
    );
    expect(screen.getByLabelText("United States")).toBeChecked();
    expect(screen.getByLabelText("United Kingdom")).not.toBeChecked();
  });
});
