// src/app/api/send_email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
    const {email, subject, message} = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    };

    try {
        const emailResponse = await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({status: "success", message: "Email sent successfully!", emailResponse}), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({status: "error", message: "Error sending email", error}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
