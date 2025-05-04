import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Contact form data interface
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

// Email sender address
const EMAIL_FROM = process.env.EMAIL_FROM || "esfgogo@gmail.com";
// Email recipient address (admin)
const EMAIL_TO = process.env.EMAIL_TO || "esfgogo@gmail.com";

// Email templates
const generateAdminEmail = (data: ContactFormData) => ({
  from: EMAIL_FROM,
  to: EMAIL_TO,
  subject: `New Contact Form Submission from ${data.name}`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #3b82f6; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
        ${data.message.replace(/\n/g, "<br>")}
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from your website contact form.</p>
    </div>
  `,
});

const generateUserEmail = (data: ContactFormData) => ({
  from: EMAIL_FROM,
  to: data.email,
  subject: "Thank you for contacting us",
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #3b82f6; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">Thank You for Reaching Out</h2>
      <p>Dear ${data.name},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
      <p>Here's a summary of your message:</p>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 15px 0;">
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      </div>
      <p>Our team is reviewing your inquiry and will respond within 1-2 business days.</p>
      <p>Best regards,</p>
      <p><strong>Leave Management Team</strong></p>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #6b7280;">
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </div>
  `,
});

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactFormData;

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Set default subject if not provided
    if (!data.subject) {
      data.subject = "Leave Management Contact Form";
    }

    // Send email to admin
    await transporter.sendMail(generateAdminEmail(data));

    // Send confirmation email to user
    await transporter.sendMail(generateUserEmail(data));

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
