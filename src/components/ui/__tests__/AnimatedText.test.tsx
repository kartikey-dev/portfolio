import { render, screen } from "@testing-library/react";
import { AnimatedText } from "../AnimatedText";

describe("AnimatedText component", () => {
  it("renders words of text content correctly", () => {
    render(<AnimatedText text="Hello World" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });

  it("supports custom HTML element tag", () => {
    const { container } = render(<AnimatedText text="Heading Text" as="h1" />);
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
