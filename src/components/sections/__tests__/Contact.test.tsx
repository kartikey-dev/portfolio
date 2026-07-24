import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "../Contact";

describe("Contact component", () => {
  it("renders section heading and contact form inputs", () => {
    render(<Contact />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/your message/i)).toBeInTheDocument();
  });

  it("renders personal contact details", () => {
    render(<Contact />);
    expect(screen.getByText("webkartikdevloper@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+91 9050102547")).toBeInTheDocument();
  });

  it("handles form input typing", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText(/your name/i);
    await user.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");
  });
});
