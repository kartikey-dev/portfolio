import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "../FAQ";

describe("FAQ component", () => {
  it("renders FAQ section heading and toggles item answers", () => {
    render(<FAQ />);

    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();

    const questionButton = screen.getByText(
      /Who is Kumar Kartikey and what frontend services does he provide\?/i
    );
    expect(questionButton).toBeInTheDocument();

    // Toggle open state
    fireEvent.click(questionButton);
    expect(
      screen.queryByText(/Who is Kumar Kartikey and what frontend services does he provide\?/i)
    ).toBeInTheDocument();
  });
});
