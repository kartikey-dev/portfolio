/**
 * @jest-environment node
 */
import { POST } from "../route";

jest.mock("resend", () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: jest.fn().mockImplementation(async ({ to }) => {
          if (to === "error@example.com") {
            return { error: { message: "Mock resend error" } };
          }
          return { data: { id: "mock_resend_id" }, error: null };
        }),
      },
    })),
  };
});

jest.mock("nodemailer", () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: "mock_smtp_id" }),
  }),
}));

describe("Contact API route", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("returns 400 if required fields are missing", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "", email: "" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toMatch(/required/i);
  });

  it("returns 400 for invalid email format", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "John", email: "invalid-email", message: "Hello" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toMatch(/email/i);
  });

  it("succeeds with Resend API integration when RESEND_API_KEY is present", async () => {
    process.env.RESEND_API_KEY = "test_key";
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "Jane Doe",
        email: "jane@example.com",
        subject: "Project Inquiry",
        message: "Interested in hiring for a project.",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.emailSent).toBe(true);
  });

  it("succeeds with Nodemailer SMTP fallback when SMTP credentials are present", async () => {
    delete process.env.RESEND_API_KEY;
    process.env.SMTP_USER = "test_user@example.com";
    process.env.SMTP_PASS = "test_password";

    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        message: "Hello world",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
    expect(data.emailSent).toBe(true);
  });

  it("handles catch block gracefully on malformed JSON payload", async () => {
    const req = new Request("http://localhost/api/contact", {
      method: "POST",
      body: "invalid-json",
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toMatch(/error occurred/i);
  });
});
