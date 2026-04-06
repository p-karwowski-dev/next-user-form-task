import { render, screen } from "@testing-library/react";
import Field from "./Field";

describe("Field", () => {
  it("renders label and input", () => {
    render(<Field label="Full Name" name="fullName" type="text" />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
  });

  it("label is linked to input via htmlFor", () => {
    render(<Field label="Full Name" name="fullName" type="text" />);
    const input = screen.getByLabelText("Full Name");
    expect(input).toHaveAttribute("id", "fullName");
  });

  it("renders error message when provided", () => {
    render(
      <Field label="Full Name" name="fullName" type="text" error="Required" />
    );
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("renders empty error row when no error", () => {
    const { container } = render(
      <Field label="Full Name" name="fullName" type="text" />
    );
    const errorEl = container.querySelector("p");
    expect(errorEl).toBeEmptyDOMElement();
  });

  it("sets defaultValue on input", () => {
    render(
      <Field
        label="Full Name"
        name="fullName"
        type="text"
        defaultValue="John Doe"
      />
    );
    expect(screen.getByLabelText("Full Name")).toHaveValue("John Doe");
  });
});
