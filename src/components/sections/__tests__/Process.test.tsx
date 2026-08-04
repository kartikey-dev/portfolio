import React from "react";
import { render, screen } from "@testing-library/react";
import { Process } from "../Process";

describe("Process component", () => {
  it("renders process heading and 4 methodology steps", () => {
    render(<Process />);

    expect(screen.getByText(/How We Deliver Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Discovery & Architecture Audit/i)).toBeInTheDocument();
    expect(screen.getByText(/Agile UI & Component Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Performance, SEO & AEO Optimization/i)).toBeInTheDocument();
    expect(screen.getByText(/Deployment & Ongoing Engineering Support/i)).toBeInTheDocument();
  });
});
