import { render, screen } from "@testing-library/react";
import { Experience } from "../Experience";

describe("Experience component", () => {
  it("renders section heading and companies", () => {
    render(<Experience />);
    expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
    expect(screen.getByText("Hestabit Technologies")).toBeInTheDocument();
    expect(screen.getByText("New Vision Digital")).toBeInTheDocument();
    expect(screen.getByText("Softclique Technologies")).toBeInTheDocument();
  });

  it("renders role titles and dates", () => {
    render(<Experience />);
    expect(screen.getAllByText(/Software Engineer/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/July 2022 – July 2026/i)).toBeInTheDocument();
  });
});
