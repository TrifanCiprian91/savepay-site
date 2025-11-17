import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"SavePay Contact" <${process.env.CONTACT_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: "Mesaj nou SavePay",
    text: `
Nume: ${body.name}
Email: ${body.email}
Mesaj:
${body.message}
    `,
  });

  return Response.json({ ok: true });
}
