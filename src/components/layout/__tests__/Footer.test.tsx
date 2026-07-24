import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer component", () => {
  it("renders copyright notice and name", () => {
    render(<Footer />);
    const nameElements = screen.getAllByText(/Kumar Kartikey/i);
    expect(nameElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument();
  });

  it("renders back to top button", () => {
    render(<Footer />);
    const topButton = screen.getByRole("button", { name: /back to top/i });
    expect(topButton).toBeInTheDocument();
  });
});
