import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    const primaryTarget = process.env.CONTACT_RECEIVER_EMAIL || "hello@kumarkartikey.com";
    const fallbackTarget = "webkartikdevloper@gmail.com";
    const emailSubject = subject
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] New Inquiry from ${name}`;

    let emailSent = false;

    // 1. Try Resend API if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1c2023; background-color: #f4f6f8;">
          <h2 style="color: #2b5866; border-bottom: 2px solid #709fa8; padding-bottom: 8px;">
            New Portfolio Contact Inquiry
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <div style="margin-top: 16px; padding: 16px; background-color: #ffffff; border-radius: 8px; border: 1px solid #d2d7dc;">
            <h4 style="margin-top: 0; color: #488293;">Message:</h4>
            <p style="white-space: pre-wrap; color: #192026;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #709fa8; margin-top: 24px;">
            Sent from Portfolio Contact Form at ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      try {
        // First attempt: Primary target email
        const res1 = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: primaryTarget,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });

        if (!res1.error) {
          emailSent = true;
        } else {
          console.warn(`Resend failed for ${primaryTarget}:`, res1.error.message);
          // If domain unverified or 403 restriction, attempt fallback to account owner email
          if (primaryTarget !== fallbackTarget) {
            const res2 = await resend.emails.send({
              from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
              to: fallbackTarget,
              replyTo: email,
              subject: emailSubject,
              html: emailHtml,
            });

            if (!res2.error) {
              emailSent = true;
              console.log(`Resend successfully delivered to fallback: ${fallbackTarget}`);
            } else {
              console.error("Resend fallback delivery failed:", res2.error);
            }
          }
        }
      } catch (resendError) {
        console.error("Resend execution error:", resendError);
      }
    }

    // 2. Try Nodemailer SMTP if SMTP / Gmail App Password is configured
    if (
      !emailSent &&
      (process.env.SMTP_USER || process.env.GMAIL_USER) &&
      (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD)
    ) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "465"),
          secure: true,
          auth: {
            user: process.env.SMTP_USER || process.env.GMAIL_USER,
            pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${process.env.SMTP_USER || process.env.GMAIL_USER}>`,
          to: primaryTarget,
          replyTo: email,
          subject: emailSubject,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1c2023; background-color: #f4f6f8;">
              <h2 style="color: #2b5866; border-bottom: 2px solid #709fa8; padding-bottom: 8px;">
                New Portfolio Contact Inquiry
              </h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || "N/A"}</p>
              <div style="margin-top: 16px; padding: 16px; background-color: #ffffff; border-radius: 8px; border: 1px solid #d2d7dc;">
                <h4 style="margin-top: 0; color: #488293;">Message:</h4>
                <p style="white-space: pre-wrap; color: #192026;">${message}</p>
              </div>
              <p style="font-size: 12px; color: #709fa8; margin-top: 24px;">
                Sent from Portfolio Contact Form at ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        });
        emailSent = true;
      } catch (smtpError) {
        console.error("SMTP delivery failed:", smtpError);
      }
    }

    // 3. Fallback log for Vercel Runtime Logs & Monitoring
    console.log(`[Contact Form Submission] Target: ${primaryTarget}`, {
      name,
      email,
      subject: subject || "Portfolio Inquiry",
      message,
      emailSent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        emailSent,
        message: "Thank you for reaching out! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
