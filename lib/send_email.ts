import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
    // increase timeout to 5 minutes
    // 300000 milliseconds = 5 minutes
    connectionTimeout: 300000,
    greetingTimeout: 300000,
    socketTimeout: 300000,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}