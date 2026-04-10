const jwt = require("jsonwebtoken");
const authConfig = require("../config/authConfig");
const authService = require("../services/auth.service");

async function authRequired(req, res, next) {
  try {
    const accessToken = req.headers?.authorization
      ?.replace("Bearer", "")
      ?.trim();

    if (!accessToken) {
      return res.unauthorized();
    }

    // jwt.verify tự throw nếu token hết hạn hoặc sai chữ ký
    const payload = jwt.verify(accessToken, authConfig.jwtSecret);

    const userId = Number(payload.sub);
    const user = await authService.getUser(userId);
    if (!user) {
      return res.unauthorized();
    }
    req.auth = {
      user,
    };

    next();
  } catch (error) {
    return res.unauthorized();
  }
}
module.exports = authRequired;
