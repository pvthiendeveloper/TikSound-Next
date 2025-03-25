import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// Get environment variables
const fromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@tiksound.com";
const adminEmail = process.env.SENDGRID_ADMIN_EMAIL || "admin@tiksound.com";
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

async function verifyCaptcha(token: string) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecret}&response=${token}`,
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, captchaToken } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha verification required" },
        { status: 400 }
      );
    }

    // Verify captcha
    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store in database (implement this based on your database solution)
    // For now, we'll just send confirmation emails

    // Send confirmation email to user
    const userMsg = {
      to: email,
      from: fromEmail, // Use your verified sender from env
      subject: "Welcome to the TikSound Waitlist!",
      text: `Thank you for joining the TikSound waitlist! We'll notify you as soon as we launch.\n\nThe TikSound Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #121212; color: white; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${appUrl}/icon.png" alt="TikSound Logo" width="60" height="60" style="margin-bottom: 10px;">
            <h1 style="margin: 0; color: white; font-size: 24px;">TikSound</h1>
          </div>
          
          <h2 style="color: #f472b6; margin-top: 0;">Welcome to the Waitlist!</h2>
          
          <p style="color: white;">Thank you for joining the TikSound waitlist! We're thrilled to have you on board.</p>
          
          <p style="color: white;">We're working hard to build the ultimate platform for TikTok sound discovery and management. You'll be among the first to know when we launch.</p>
          
          <div style="background: linear-gradient(to right, #f472b6, #9333ea); padding: 20px; border-radius: 10px; margin: 30px 0; text-align: center;">
            <h3 style="margin-top: 0; color: white;">What's next?</h3>
            <p style="margin-bottom: 0;">We'll notify you as soon as TikSound is ready for you to explore!</p>
          </div>
          
          <p>In the meantime, follow us on social media for updates and sneak peeks:</p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="${appUrl}" style="color: #f472b6; text-decoration: none; margin: 0 10px;">Website</a>
            <a href="${appUrl}" style="color: #f472b6; text-decoration: none; margin: 0 10px;">Instagram</a>
            <a href="${appUrl}" style="color: #f472b6; text-decoration: none; margin: 0 10px;">TikTok</a>
          </div>
          
          <p style="text-align: center; margin-top: 40px; font-size: 12px; color: #888888;">
            &copy; ${new Date().getFullYear()} TikSound. All rights reserved.
          </p>
        </div>
      `,
    };

    // Send notification to admin
    const adminMsg = {
      to: adminEmail, // Admin email from env
      from: fromEmail, // Verified sender from env
      subject: "New TikSound Waitlist Signup",
      text: `New waitlist signup:\nEmail: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2>New Waitlist Signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([sgMail.send(userMsg), sgMail.send(adminMsg)]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", JSON.stringify(error));
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
