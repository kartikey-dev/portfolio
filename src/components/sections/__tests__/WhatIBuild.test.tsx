import { render, screen } from "@testing-library/react";
import { WhatIBuild } from "../WhatIBuild";

describe("WhatIBuild component", () => {
  it("renders section heading and services cards", () => {
    render(<WhatIBuild />);
    expect(screen.getByText("What I Build")).toBeInTheDocument();
    expect(screen.getByText("AI SaaS Applications")).toBeInTheDocument();
    expect(screen.getByText("Cross-Platform Mobile Apps")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce Platforms")).toBeInTheDocument();
  });
});
