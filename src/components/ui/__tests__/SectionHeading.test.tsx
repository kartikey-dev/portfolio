import { render, screen } from "@testing-library/react";
import { SectionHeading } from "../SectionHeading";

describe("SectionHeading component", () => {
  it("renders title and badge", () => {
    render(<SectionHeading title="Work Experience" badge="Career" />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
    expect(screen.getByText("Career")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Projects" subtitle="My recent showcase" />);
    expect(screen.getByText("My recent showcase")).toBeInTheDocument();
  });

  it("applies center alignment when centered is true", () => {
    const { container } = render(<SectionHeading title="Centered" centered />);
    expect(container.firstChild).toHaveClass("text-center");
  });
});
