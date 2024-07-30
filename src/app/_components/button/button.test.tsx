import { describe } from "node:test";
import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  test("render a default button", () => {
    const { getByText } = render(<Button>Click Here</Button>);
    expect(getByText("Click Here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click Here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">Click Here!</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("applies the correct css class for different button sizes", () => {
    const { rerender } = render(<Button size="large">Click Here!</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");

    rerender(<Button size="tiny">Click Here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");
  });

  test("show rendered button", () => {
    render(
      <Button variant="primary" isOutline={true} size="large" isDisabled={true}>
        Click Here
      </Button>
    );
    screen.debug();
  });
});
