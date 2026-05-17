import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Manyaseema Contact Form" <${process.env.SMTP_USER}>`,
            to: "info@manyaseema.ngo",
            replyTo: email,
            subject: `[Contact Form] ${subject || "General Inquiry"} — from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 12px;">
                    <h2 style="color: #333; margin-bottom: 4px;">New Message from Contact Form</h2>
                    <p style="color: #888; font-size: 13px; margin-top: 0;">Manyaseema Website</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr>
                            <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name</strong></td>
                            <td style="padding: 8px 0; color: #333;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
                            <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #666;"><strong>Subject</strong></td>
                            <td style="padding: 8px 0; color: #333;">${subject || "General Inquiry"}</td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
                    <h4 style="color: #666; margin-bottom: 8px;">Message</h4>
                    <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[Contact API] Email send failed:", err);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
