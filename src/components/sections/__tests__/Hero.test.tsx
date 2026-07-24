import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero component", () => {
  it("renders user name and title", () => {
    render(<Hero />);
    expect(screen.getByText("Kumar")).toBeInTheDocument();
    expect(screen.getByText("Kartikey")).toBeInTheDocument();
    expect(screen.getAllByText(/Senior Frontend Engineer & UI Expert/i).length).toBeGreaterThan(0);
  });

  it("renders key stats and CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /explore showcase/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /let's connect/i })).toBeInTheDocument();
  });
});
