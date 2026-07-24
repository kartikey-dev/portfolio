import { render, screen } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter component", () => {
  it("renders with initial value and suffix", () => {
    render(<Counter end={50} suffix="K+" />);
    expect(screen.getByText(/K\+/i)).toBeInTheDocument();
  });
});
