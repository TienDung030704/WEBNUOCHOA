const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");
const { verifyEmailSecret } = require("../config/jwt");
const prisma = require("../lib/prisma");

class EmailService {
  async sendVerifyEmail(email, token, subject) {
    try {
      const frontendUrl = (process.env.FRONTEND_URL || "http://localhost:5173")
        .replace(/\/+$/, "");
      const verificationUrl = `${frontendUrl}/#/verify-email?token=${encodeURIComponent(token)}`;
      const info = await transporter.sendMail({
        from: '"DUWNG Perfume" <nguyentiendungt123@gmail.com>',
        to: email,
        subject: subject || "Xác thực tài khoản",

        text: `Xác thực email tại đây: ${verificationUrl}`,

        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🔐 Xác thực tài khoản</h2>

          <p>Chào bạn,</p>

          <p>Bạn vừa đăng ký tài khoản tại <b>DUWNG Perfume</b>.</p>

          <p>Vui lòng nhấn vào nút bên dưới để xác thực email của bạn:</p>

          <a href="${verificationUrl}" 
             style="
               display:inline-block;
               padding:12px 20px;
               background-color:#1da1f2;
               color:#fff;
               text-decoration:none;
               border-radius:6px;
               margin:10px 0;
             ">
            Xác thực ngay
          </a>

          <p>Hoặc copy link này:</p>
          <p style="color:#555;">
            ${verificationUrl}
          </p>

          <p style="margin-top:20px;">
            Nếu bạn không đăng ký tài khoản, hãy bỏ qua email này.
          </p>
        </div>
      `,
      });

      return info;
    } catch (error) {
      throw error;
    }
  }

  async verifyEmail(verifyToken) {
    try {
      const payload = jwt.verify(verifyToken, verifyEmailSecret);
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        throw {
          message: "Token hết hạn",
        };
      }
      const userId = payload.sub;

      await prisma.user.update({
        where: { id: userId },
        data: { isEmailVerified: true },
      });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new EmailService();
