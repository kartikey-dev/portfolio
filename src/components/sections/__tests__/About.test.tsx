import { render, screen } from "@testing-library/react";
import { About } from "../About";

describe("About component", () => {
  it("renders section heading and bio content", () => {
    render(<About />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();
  });

  it("renders education items", () => {
    render(<About />);
    expect(screen.getByText(/Kurukshetra University/i)).toBeInTheDocument();
    expect(screen.getByText(/Ducat Institute/i)).toBeInTheDocument();
  });

  it("renders certification", () => {
    render(<About />);
    expect(screen.getByText(/Claude Code in Action/i)).toBeInTheDocument();
  });
});
