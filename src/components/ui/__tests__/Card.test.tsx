import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Card component", () => {
  it("renders children content correctly", () => {
    render(
      <Card>
        <div>Card Content</div>
      </Card>
    );
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("applies default glass-panel styling", () => {
    const { container } = render(<Card>Test</Card>);
    expect(container.firstChild).toHaveClass("glass-panel");
  });

  it("applies hover effects when hoverEffect is true", () => {
    const { container } = render(<Card hoverEffect>Hover Card</Card>);
    expect(container.firstChild).toHaveClass("hover:-translate-y-1");
  });

  it("passes additional className", () => {
    const { container } = render(<Card className="custom-class">Custom</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
