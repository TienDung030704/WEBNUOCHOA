const nodemailer = require("nodemailer");
const dns = require("dns");

// ✅ Fix IPv6 issue
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GOOGLE_APP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  connectionTimeout: 10000,
  socketTimeout: 10000,
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error.message);
  } else {
    console.log("✅ SMTP Server is ready");
  }
});

module.exports = transporter;
