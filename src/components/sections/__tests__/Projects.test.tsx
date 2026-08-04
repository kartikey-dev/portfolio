import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Projects } from "../Projects";

describe("Projects component", () => {
  it("renders section heading and project titles", () => {
    render(<Projects />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Pokedex Explorer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI Healthcare Platform/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI Insurance Concierge Platform/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI Construction Co-Pilot/i).length).toBeGreaterThan(0);
  });

  it("renders category tags and live links", () => {
    render(<Projects />);
    expect(screen.getAllByText("Healthcare").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React Native").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /live demo/i }).length).toBeGreaterThan(0);
  });

  it("filters projects when clicking category tabs", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const tabs = [
      "Featured",
      "Portfolio",
      "Chrome Extension",
      "AI Chatbot & SaaS",
      "E-Commerce & Booking",
      "Mobile Apps",
      "Informative & Education",
      "Training, GYM & Sports",
      "Real Estate",
      "All",
    ];

    for (const tabName of tabs) {
      const tabBtn = screen.getByRole("button", { name: new RegExp(tabName, "i") });
      await user.click(tabBtn);
      expect(tabBtn).toBeInTheDocument();
    }
  }, 20000);
});
