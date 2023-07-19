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
      user: process.env.smtp_user,
      pass: process.env.smtp_password,
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
    from: process.env.smtp_from,
    ...data,
  })
}