import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "../Contact";

describe("Contact component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  it("renders section heading and form input fields", () => {
    render(<Contact />);
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Project Inquiry/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
  });

  it("submits contact form successfully", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText(/Your Name/i), "John Doe");
    await user.type(screen.getByPlaceholderText(/Your Email/i), "john@example.com");
    await user.type(screen.getByPlaceholderText(/Project Inquiry/i), "Job Opportunity");
    await user.type(screen.getByPlaceholderText(/Your Message/i), "Hello, love your work!");

    const submitBtn = screen.getByRole("button", { name: /Send Message/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Message Sent Successfully/i)).toBeInTheDocument();
    });
  }, 15000);

  it("handles form submission error", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Invalid email" }),
    });

    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText(/Your Name/i), "John Doe");
    await user.type(screen.getByPlaceholderText(/Your Email/i), "john@example.com");
    await user.type(screen.getByPlaceholderText(/Project Inquiry/i), "Job Opportunity");
    await user.type(screen.getByPlaceholderText(/Your Message/i), "Hello, love your work!");

    const submitBtn = screen.getByRole("button", { name: /Send Message/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  }, 15000);
});
