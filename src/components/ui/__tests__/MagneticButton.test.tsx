import { render, screen, fireEvent } from "@testing-library/react";
import { MagneticButton } from "../MagneticButton";

describe("MagneticButton component", () => {
  it("renders children content correctly", () => {
    render(<MagneticButton>Magnetic Content</MagneticButton>);
    expect(screen.getByText("Magnetic Content")).toBeInTheDocument();
  });

  it("handles mousemove and mouseleave events", () => {
    render(<MagneticButton>Button</MagneticButton>);
    const element = screen.getByText("Button").parentElement!;

    fireEvent.mouseMove(element, { clientX: 100, clientY: 100 });
    fireEvent.mouseLeave(element);

    expect(element).toBeInTheDocument();
  });
});
