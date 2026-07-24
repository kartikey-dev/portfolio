import { render, screen } from "@testing-library/react";
import { MagneticButton } from "../MagneticButton";

describe("MagneticButton component", () => {
  it("renders children content correctly", () => {
    render(<MagneticButton>Magnetic Content</MagneticButton>);
    expect(screen.getByText("Magnetic Content")).toBeInTheDocument();
  });

  it("applies inline-block container styling", () => {
    const { container } = render(<MagneticButton>Button</MagneticButton>);
    expect(container.firstChild).toHaveClass("inline-block");
  });
});
