import { render, screen } from "@testing-library/react";
import { Skills } from "../Skills";

describe("Skills component", () => {
  it("renders section heading and skill categories", () => {
    render(<Skills />);
    expect(screen.getByText(/Tech Stack & Skills/i)).toBeInTheDocument();
    expect(screen.getByText("Languages & Core")).toBeInTheDocument();
    expect(screen.getByText("Frontend Frameworks")).toBeInTheDocument();
    expect(screen.getByText("UI, Styling & Animation")).toBeInTheDocument();
  });

  it("renders specific skill tags", () => {
    render(<Skills />);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Next.js (App Router)").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Tailwind CSS (v3 & v4)").length).toBeGreaterThan(0);
  });
});
