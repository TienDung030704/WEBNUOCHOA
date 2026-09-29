const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST || "smtp.gmail.com",
  port: Number(process.env.MAILER_PORT || 587),
  secure: process.env.MAILER_SECURE === "true",
  auth: {
    user: process.env.GOOGLE_APP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

module.exports = transporter;
