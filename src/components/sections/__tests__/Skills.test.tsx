import { render, screen } from "@testing-library/react";
import { Skills } from "../Skills";

describe("Skills component", () => {
  it("renders section heading and skill categories", () => {
    render(<Skills />);
    expect(screen.getByText(/Tech Stack & Skills/i)).toBeInTheDocument();
    expect(screen.getByText("Frontend & Core Frameworks")).toBeInTheDocument();
    expect(screen.getByText("Modern CSS, Styling & UI")).toBeInTheDocument();
    expect(screen.getByText("Frontend Animation")).toBeInTheDocument();
    expect(screen.getByText("AI Development")).toBeInTheDocument();
  });

  it("renders specific skill tags", () => {
    render(<Skills />);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Tailwind CSS (v3 & v4)").length).toBeGreaterThan(0);
  });
});
