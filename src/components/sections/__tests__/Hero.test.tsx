import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero component", () => {
  it("renders user name and title", () => {
    render(<Hero />);
    expect(screen.getByText("Kumar")).toBeInTheDocument();
    expect(screen.getByText("Kartikey")).toBeInTheDocument();
    expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();
  });

  it("renders key stats", () => {
    render(<Hero />);
    expect(screen.getByText("6.5+")).toBeInTheDocument();
    expect(screen.getByText(/Years Exp/i)).toBeInTheDocument();
    expect(screen.getByText("50K+")).toBeInTheDocument();
    expect(screen.getByText("95+")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /explore work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get in touch/i })).toBeInTheDocument();
  });
});
