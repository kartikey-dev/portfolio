import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders all major sections", () => {
    render(<Home />);
    expect(screen.getByText("Kumar")).toBeInTheDocument();
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Tech Stack & Skills/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Get In Touch/i).length).toBeGreaterThan(0);
  });
});
