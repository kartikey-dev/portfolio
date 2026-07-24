import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "../Contact";

describe("Contact component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

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

  it("submits contact form successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText(/your name/i), "Alice");
    await user.type(screen.getByPlaceholderText(/your email/i), "alice@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hello Kartikey!");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Message Sent Successfully/i)).toBeInTheDocument();
    });
  });

  it("handles form submission error", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Invalid email" }),
    });

    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText(/your name/i), "Bob");
    await user.type(screen.getByPlaceholderText(/your email/i), "bob@example.com");
    await user.type(screen.getByPlaceholderText(/your message/i), "Hi there");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  });
});
