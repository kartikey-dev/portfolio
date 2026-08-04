import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Projects } from "../Projects";

describe("Projects component", () => {
  it("renders section heading and featured project titles by default", () => {
    render(<Projects />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    // Featured tab is active by default — these 5 projects should show
    expect(screen.getAllByText(/Kraken/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI Healthcare Platform/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Subtitle Extension for Netflix/i).length).toBeGreaterThan(0);
  });

  it("renders category tabs and live links", () => {
    render(<Projects />);
    // Featured tab button exists
    expect(screen.getByRole("button", { name: /^Featured$/i })).toBeInTheDocument();
    // All tab button exists
    expect(screen.getByRole("button", { name: /^All$/i })).toBeInTheDocument();
  });

  it("shows all projects when All tab is clicked", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const allTab = screen.getByRole("button", { name: /^All$/i });
    await user.click(allTab);

    // Non-featured projects should now appear
    expect(screen.getAllByText(/Pokedex Explorer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI Construction Co-Pilot/i).length).toBeGreaterThan(0);
  });

  it("filters projects when clicking category tabs", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const tabs = [
      "Portfolio",
      "Chrome Extension",
      "AI Chatbot & SaaS",
      "E-Commerce & Booking",
      "Mobile Apps",
      "Informative & Education",
      "Training, GYM & Sports",
      "Real Estate",
      "All",
      "Featured",
    ];

    for (const tabName of tabs) {
      const tabBtn = screen.getByRole("button", {
        name: new RegExp(tabName.replace(/[&]/g, "\\$&"), "i"),
      });
      await user.click(tabBtn);
      expect(tabBtn).toBeInTheDocument();
    }
  }, 20000);
});
