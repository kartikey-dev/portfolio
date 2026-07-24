import { render, screen } from "@testing-library/react";
import { Projects } from "../Projects";

describe("Projects component", () => {
  it("renders section heading and project titles", () => {
    render(<Projects />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulse — AI Healthcare Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Orchard Benefits/i)).toBeInTheDocument();
    expect(screen.getByText(/AI Construction Co-Pilot/i)).toBeInTheDocument();
  });

  it("renders category tags and tech stack badges", () => {
    render(<Projects />);
    expect(screen.getAllByText("Healthcare").length).toBeGreaterThan(0);
    expect(screen.getAllByText("React Native").length).toBeGreaterThan(0);
    expect(screen.getAllByText("GraphQL").length).toBeGreaterThan(0);
  });
});
