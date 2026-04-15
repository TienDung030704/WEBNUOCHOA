const express = require("express");
const authController = require("../controllers/auth.controller");
const authRequired = require("../middlewares/authRequire");
const router = express.Router();

// [POST] /api/auth/register
router.post("/register", authController.register);
// [POST] /api/auth/login
router.post("/login", authController.login);
// [GET] /api/auth/user
router.get("/me", authRequired, authController.getCurrentUser);
//[POST] /auth/refresh-token
router.post("/refresh-token", authController.refreshToken);
//[POST] /auth/verify-token
router.post("/send-verify-email", authController.verifyedSendEmailUser);
// [POST] /api/auth/verify-email
router.post("/verify-email", authController.verifyedEmail);
// [POST] /api/auth/google
router.post("/google", authController.googleLogin);
module.exports = router;
