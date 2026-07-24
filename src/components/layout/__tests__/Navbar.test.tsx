import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../Navbar";

describe("Navbar component", () => {
  it("renders logo/name correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Kartikey")).toBeInTheDocument();
    expect(screen.getByText(".dev")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("toggles theme when theme button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const themeButtons = screen.getAllByRole("button", { name: /toggle theme/i });
    await user.click(themeButtons[0]);
    expect(themeButtons[0]).toBeInTheDocument();
  });

  it("toggles mobile menu and clicks nav link", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const aboutLinks = screen.getAllByText("About");
    fireEvent.click(aboutLinks[0]);
  });
});
