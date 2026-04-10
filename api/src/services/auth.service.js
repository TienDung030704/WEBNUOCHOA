const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/authConfig");
const randomString = require("../utils/randomString");
const { verifyEmailSecret } = require("../config/jwt");
const emailService = require("./email.service");

class AuthService {
  // Đăng kí logic
  async handleRegister(username, email, password) {
    try {
      // HashPassword của user khi đăng kí
      const hashPassword = await bcrypt.hash(password, 10);

      // Tạo user mới
      const newUser = await prisma.user.create({
        data: { username, email, password: hashPassword },
      });

      // Gửi email xác thực
      const verifyToken = await this.createVerifyEmailToken(newUser);
      await emailService.sendVerifyEmail(
        email,
        verifyToken,
        "Xác thực tài khoản DUWNG Perfume",
      );
      return {
        message:
          "Đăng ký thành công, vui lòng kiểm tra email để xác thực tài khoản",
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  // Đăng nhập logic
  async handleLogin(email, password) {
    try {
      const userLogin = await prisma.user.findUnique({
        where: { email },
      });
      // Nếu không tìm thấy user
      if (!userLogin) {
        return null;
      }
      if (!userLogin.isEmailVerified) {
        throw new Error("Vui lòng xác thực email trước khi đăng nhập");
      }
      // Kiểm tra password có đúng không
      const isValidPassword = await bcrypt.compare(
        password,
        userLogin.password,
      );
      // check điều kiện nếu password hợp lệ thì tạo accessToken & refreshToken
      if (isValidPassword) {
        // Tạo accessToken cho user ở register
        const userToken = await this.createAccesstoken(userLogin);
        // Tạo accessToken cho user ở register
        const userRefreshToken = await this.createRefreshToken(userLogin);
        return {
          user: userLogin,
          accessToken: userToken,
          refreshToken: userRefreshToken,
        };
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Lấy thông tin của chính mình logic
  async getUser(userId) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user;
  }

  // Lấy user theo email
  async getUserByEmail(email) {
    const userByEmail = prisma.user.findUnique({ where: { email } });
    return userByEmail;
  }

  // Tạo accessToken cho user logic
  async createAccesstoken(user) {
    const expiresAt = Math.floor(Date.now() / 1000) + authConfig.accessTokenTTL;
    const tokenPayload = { sub: user.id, exp: expiresAt };
    return jwt.sign(tokenPayload, authConfig.jwtSecret);
  }

  // Tạo token xác thực email (JWT, hết hạn 24h)
  async createVerifyEmailToken(user) {
    const payload = {
      sub: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    };
    return jwt.sign(payload, verifyEmailSecret);
  }

  // Tạo refresh token
  async createRefreshToken(user) {
    const expiresAt = new Date(Date.now() + authConfig.refreshTokenTTL * 1000);
    const token = randomString(32);
    await prisma.refreshToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      },
    });
    return token;
  }
}
module.exports = new AuthService();
