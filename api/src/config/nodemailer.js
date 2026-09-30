const nodemailer = require("nodemailer");
const dns = require("dns");

// Ưu tiên IPv4 thay vì IPv6
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GOOGLE_APP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  connectionTimeout: 5000,
  socketTimeout: 5000,
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready ✅");
  }
});

module.exports = transporter;
