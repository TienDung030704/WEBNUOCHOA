const authService = require("../services/auth.service");
const emailService = require("../services/email.service");
const constants = require("../config/constant");
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // handleRegister trả về { user, accessToken }
    const result = await authService.handleRegister(username, email, password);
    res.success(result);
  } catch (error) {
    console.log("BACKEND ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.handleLogin(email, password);
    console.log(user);
    res.success(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCurrentUser = async (req, res) => {
  res.success(req.auth.user);
};
const refreshToken = async (req, res) => {
  try {
    const tokenRefresh = await authService.createRefreshToken(user);
    res.success(tokenRefresh);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Gui thu xac thuc email cho user
const verifyedSendEmailUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await authService.getUserByEmail(email);
    if (!user) {
      return res
        .status(constants.httpCodes.notFound)
        .json({ message: "User không tồn tại" });
    }
    const token = authService.createVerifyEmailToken(user);
    await emailService.sendVerifyEmail(
      email,
      token,
      "Xác thực tài khoản DUWNG Perfume",
    );
    res.success({ message: "Email xác thực đã được gửi" });
  } catch (error) {
    res
      .status(constants.httpCodes.internalServerError)
      .json({ message: error.message });
  }
};
// Xac thuc verify tai khoan
const verifyedEmail = async (req, res) => {
  try {
    const { token } = req.body;
    await emailService.verifyEmail(token);
    res.success({ message: "Xác thực email thành công" });
  } catch (error) {
    res
      .status(constants.httpCodes.unauthorized)
      .json({ message: error.message });
  }
};
module.exports = {
  register,
  login,
  getCurrentUser,
  refreshToken,
  verifyedSendEmailUser,
  verifyedEmail,
};
